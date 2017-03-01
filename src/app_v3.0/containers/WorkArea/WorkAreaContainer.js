/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
// import container
import SectionContainer from './SectionContainer'
//import component
import WorkAreaComponent from '../../components/WorkArea/WorkAreaComponent'
//import ContextMenuComponent from '../../components/WorkArea/ContextMenuComponent'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'
import * as EditPanelActions from '../../actions/EditPanelActions'

class WorkAreaContainer extends Component {
		constructor(props) {
				super(props);

				this.handleClickAddSection = this.handleClickAddSection.bind(this);

				this.handleMoveSection = this.handleMoveSection.bind(this);
				this.handleMoveRow = this.handleMoveRow.bind(this);
				this.handleContextMenu = this.handleContextMenu.bind(this);
				this.handelBlurContextMenu = this.handelBlurContextMenu.bind(this);
				this.handleRemove = this.handleRemove.bind(this);
				this.handleMoveElement = this.handleMoveElement.bind(this);
		}

		componentDidMount() {
				// empty
		}

		focusContextMenu(){
				setTimeout(() => (ReactDOM.findDOMNode(this.refs.contextMenu).focus()), 0);
		}

		handleMoveSection(dragIndex, hoverIndex) {
				const {id} = this.props;
				const {ActionMoveSection} = this.props.mapDispactchWorkArea;
				ActionMoveSection(id, dragIndex, hoverIndex);
		}

		handleMoveRow(dragIndex, hoverIndex, items, component) {
				// hover => component; drag => item;
				const {parentId} = component;

				const {ActionMoveRow} = this.props.mapDispactchWorkArea;
				//console.log('index drag: ',items.index, 'index hover: ',index);
// up index drag:  0 index hover:  3
				//down index drag:  2 index hover:  0
				//console.log('this parent', component);
				if (items.parentId === parentId) {

						ActionMoveRow(items.parentId, dragIndex, hoverIndex);
				} else {
						//console.log('other parent', items.parentId, dragIndex, hoverIndex);
						// Todo: remove drag in old Section, add in new Section, need: change items.parentId on component.parentId
						const {ActionRemoveChild, ActionAddNode, ActionActiveOpacity} = this.props.mapDispactchWorkArea;
						ActionRemoveChild(items.parentId, items.id);
						ActionAddNode(component.parentId, items.id, component.id);
						ActionActiveOpacity(items.id);
						//const opacity = 0;
						items.parentId = component.parentId;
						items.index = component.index;
						let newHoverIndex = items.index + 1;
						ActionMoveRow(items.parentId, items.index, newHoverIndex);


						/*if (items.index > index){
						 const {ActionRemoveChild, ActionAddNode} = this.props.mapDispactchWorkArea;
						 ActionRemoveChild(items.parentId, items.id);
						 ActionAddNode(component.parentId, items.id, component.id);
						 }else if (items.index < index ){
						 const {ActionRemoveChild, ActionAddNode} = this.props.mapDispactchWorkArea;
						 ActionRemoveChild(items.parentId, items.id);
						 ActionAddNode(component.parentId, items.id, component.id);
						 items.parentId = component.parentId;
						 items.index = component.index;
						 let newHoverIndex = items.index + 1;
						 ActionMoveRow(items.parentId, items.index, newHoverIndex);
						 }*/
						//component.index = ++items.index;
						//ActionMoveRow(items.parentId, dragIndex, hoverIndex);
// run Up / run Down
//console.log()
//component.index = ++items.index;
				}
				/*}else{
				 // Todo: remove drag.id in old Section, add in new Section
				 const {ActionExchangeNodeRemove, ActionExchangeNodeAdd} = this.props.mapDispactchWorkArea;
				 ActionExchangeNodeRemove(item.parentId, item.id);
				 ActionExchangeNodeAdd(parentId, item.id);
				 console.log(item, id, parentId, index);
				 }*/

		}

		handleMoveElement(dragIndex, hoverIndex, items, component) {
				//console.log(dragIndex, hoverIndex, items, component);

				const {parentId} = component;
				const {ActionMoveRow} = this.props.mapDispactchWorkArea;
				if (items.parentId === parentId) {
						ActionMoveRow(items.parentId, dragIndex, hoverIndex);
				} else {
						const {ActionRemoveChild, ActionAddNode, ActionActiveOpacity} = this.props.mapDispactchWorkArea;
						ActionRemoveChild(items.parentId, items.id);
						ActionAddNode(component.parentId, items.id, component.id);
						ActionActiveOpacity(items.id);
						items.parentId = component.parentId;
						items.index = component.index;
						let newHoverIndex = items.index + 1;
						ActionMoveRow(items.parentId, items.index, newHoverIndex);
				}
		}

		handleClickAddSection() {
				//console.log('click Add Section');
				const {id} = this.props;
				const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchWorkArea;
				const childrenId = ActionCreateNode(id).nodeId;
				ActionAddNode(id, childrenId);
		}

		handelBlurContextMenu() {
				const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
				ActionActiveContextMenu('', '', 0, 0);
		}

		handleContextMenu(event, id, parentId, structure) {
				event.preventDefault();
				if (event.type === 'contextmenu') {
// if click right button

						const {ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
						ActionActiveContextMenu(id, parentId, event.nativeEvent.clientY, event.nativeEvent.clientX);
						this.focusContextMenu();
				} else {
						// if click left button => event.type === 'click'
						// need activate Edit panel for this structure
						console.log('click ',id, parentId, structure);
//structure - Section/Row/Text/Image...
						const { ActionIsActiveEditPanel, ActionCreateNodeStyles } = this.props.mapDispactchEditPanel;
						const {ActionActivateEditPanel, ActionDeactivateEditPanel} = this.props.mapDispactchWorkArea;
						const {isActiveEditPanel, ActiveStructure} = this.props.mapStateEditPanel;


						if (ActiveStructure.id === id){
								ActionDeactivateEditPanel(ActiveStructure.id);
								ActionIsActiveEditPanel('', '', false);
						}else{
								if (isActiveEditPanel === false) {
										// на даному етапі тільки активує структуру
										ActionActivateEditPanel(id);
										// need if first time

								} else if (isActiveEditPanel === true){
										// деактивує попереднню активну структуру
										ActionDeactivateEditPanel(ActiveStructure.id);
										// активує поточну структуру
										ActionActivateEditPanel(id);

								}
								ActionCreateNodeStyles(id);
								// додає id активної структури для Edit Panel
								ActionIsActiveEditPanel(id, structure, true);
						}
				}
		}

		handleRemove(){
				const {activeContextMenu} = this.props.mapStateWorkArea;
				const {ActionRemoveChild, ActionDeleteNode, ActionActiveContextMenu} = this.props.mapDispactchWorkArea;
				//const {ActionDeleteNodeStyles} = this.props.mapDispactchEditPanel;
				ActionRemoveChild(activeContextMenu.parentId, activeContextMenu.id);
				ActionDeleteNode(activeContextMenu.id);
				ActionActiveContextMenu('', '', 0, 0);
// remove styles
				//ActionDeleteNodeStyles(id);
		}

		render() {
				const {id} = this.props;
				const {childrenIds} = this.props.mapStateWorkArea[id];
				const {opacityId, activeContextMenu} = this.props.mapStateWorkArea;
				const display = (activeContextMenu.id !== '') ? 'block' : 'none';

				return (
						<WorkAreaComponent
								handleClickAddSection={this.handleClickAddSection}
						>
								{childrenIds.map((childrenId, index) => (
										<SectionContainer
												id={childrenId}
												parentId={id}
												key={`key-${childrenId}`}
												index={index}
												handleMoveSection={this.handleMoveSection}
												handleMoveRow={this.handleMoveRow}
												handleMoveElement={this.handleMoveElement}
												opacityId={opacityId}
												handleContextMenu={this.handleContextMenu}
										/>
								))}

								<div>
										<ul
												onBlur={this.handelBlurContextMenu}
												className="pb-context-menu"
												style={{
														'display': display,
														'top': activeContextMenu.top,
														'left': activeContextMenu.left
												}}
												ref="contextMenu"
												tabIndex={0}
										>
												<li
														onClick={this.handleRemove}
														className="pb-context-menu-btn"
												>Remove</li>
												<li className="pb-context-menu-btn">Copy</li>
												<li className="pb-context-menu-btn">Paste</li>
										</ul>
								</div>

						</WorkAreaComponent>
				);
		}
}


function mapStateToProps(state) {
		//console.log('state WorkAreaContainer', state);
		return {
				mapStateWorkArea: state.WorkAreaReducer,
				mapStateEditPanel: state.EditPanelReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch),
				mapDispactchEditPanel: bindActionCreators(EditPanelActions, dispatch)
		}
}

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaContainer)
