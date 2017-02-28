/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
// import container
import SectionContainer from './SectionContainer'
//import component
import WorkAreaComponent from '../../components/WorkArea/WorkAreaComponent'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

class WorkAreaContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);

        this.handleMoveSection = this.handleMoveSection.bind(this);
        this.handleMoveRow = this.handleMoveRow.bind(this);
    }

    componentDidMount() {
        // empty
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
        if (items.parentId === parentId){

						ActionMoveRow(items.parentId, dragIndex, hoverIndex);
				}else{
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

    handleClickAddSection() {
        //console.log('click Add Section');
        const {id} = this.props;
        const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchWorkArea;
        const childrenId = ActionCreateNode(id).nodeId;
        ActionAddNode(id, childrenId);
    }

    render() {
        const {id} = this.props;
        const {childrenIds} = this.props.mapStateWorkArea[id];
        const {opacityId} = this.props.mapStateWorkArea;
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
                        opacityId={opacityId}
                    />
                ))}
            </WorkAreaComponent>
        );
    }
}


function mapStateToProps(state) {
    //console.log('state WorkAreaContainer', state);
    return {
        mapStateWorkArea: state.WorkAreaReducer,
        mapStateToolbar: state.ToolbarReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaContainer)
