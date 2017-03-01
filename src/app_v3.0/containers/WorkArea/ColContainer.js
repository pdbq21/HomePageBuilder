/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {DragSource, DropTarget} from 'react-dnd';

// components
import ColComponent from '../../components/WorkArea/ColComponent'
//import DropAreaComponent from '../../components/WorkArea/DropAreaComponent'
//containers
import ElementContainer from './ElementContainer'
// actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

function DropAreaElement(props) {
		const {canDrop, isOver, connectDropTarget} = props;
		const isActive = canDrop && isOver;
		let styles;

		if (isActive) {
				styles = {'backgroundColor': '#77d777'};
		} else if (canDrop) {
				styles = {'backgroundColor': '#90ff90'};
		}

		return connectDropTarget(
				<div className="card pb-dashed-card"
						 style={styles}>
						<div className="card-block">
								<i className="fa fa-hand-paper-o"/> Drag and drop a <b>Element</b> here to start!
						</div>
				</div>);
}

const DropAreaTarget = DropTarget('DROP_ELEMENT', {
		drop(props, monitor) {
				//console.log('drop', props, monitor, component, monitor.getItem());//{ name: 'test_name' };
				props.onDrop(monitor.getItem());
				return {};
		}
}, (connect, monitor) => {
		return {
				connectDropTarget: connect.dropTarget(),
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop()
		};
})(DropAreaElement);

// Application
class ColContainer extends Component {
		constructor(props) {
				super(props);
				this.handleDropElement = this.handleDropElement.bind(this);
		}

		handleDropElement(id, item) {
				console.log('drop element', id, item.elementType);
				const {ActionCreateNode, ActionAddNode, ActionElementType} = this.props.mapDispactchWorkArea;
				const childrenIdElement = ActionCreateNode(id).nodeId;
				// create Element
				ActionAddNode(id, childrenIdElement);
				// add element type => Text/Image/Button...
				ActionElementType(childrenIdElement, item.elementType);
		}


		render() {
				const {gridIndex, childrenIds} = this.props.mapStateCol;
				const {id} = this.props;

				return (
						<ColComponent
								gridIndex={gridIndex}
						>
								{(childrenIds.length) ?
										(childrenIds.map((childrenId, index) => (
												<ElementContainer
														id={childrenId}
														parentId={id}
														index={index}
														key={`key-${childrenId}`}
												/>
										))) :
										(<DropAreaTarget
												name="Element"
												onDrop={item => this.handleDropElement(id, item)}
										/>)
								}
						</ColComponent>

				);
		}
}

function mapStateToProps(state, ownProps) {
		return {
				mapStateCol: state.WorkAreaReducer[ownProps.id],
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(ColContainer)