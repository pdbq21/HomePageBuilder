/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
//import component
import SectionComponent from '../../components/WorkArea/SectionComponent'
import DropAreaComponent from '../../components/WorkArea/DropAreaComponent'
// import container
import ControlBarContainer from './ControlBarContainer'

import * as WorkAreaActions from '../../actions/WorkAreaActions'

const cardSource = {
		beginDrag(props) {
				return {
						id: props.id,
						index: props.index
				};
		}
};
const cardTarget = {
		hover(props, monitor, component) {
				const dragIndex = monitor.getItem().index;
				const hoverIndex = props.index;

				// Don't replace items with themselves
				if (dragIndex === hoverIndex) {
						return;
				}

				// Determine rectangle on screen
				const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

				// Get vertical middle
				const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

				// Determine mouse position
				const clientOffset = monitor.getClientOffset();

				// Get pixels to the top
				const hoverClientY = clientOffset.y - hoverBoundingRect.top;

				// Only perform the move when the mouse has crossed half of the items height
				// When dragging downwards, only move when the cursor is below 50%
				// When dragging upwards, only move when the cursor is above 50%

				// Dragging downwards
				if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
						return;
				}

				// Dragging upwards
				if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
						return;
				}

				// Time to actually perform the action
				props.moveCard(dragIndex, hoverIndex);

				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				monitor.getItem().index = hoverIndex;
		}
};
class SectionContainer extends Component {
		constructor(props) {
				super(props);

				this.handleClickAddSection = this.handleClickAddSection.bind(this);
		}

		componentDidMount() {
				// empty
		}
		handleClickAddSection(){

		}


		render() {
				const {id} = this.props;
				const { isDragging, connectDragSource, connectDropTarget } = this.props;
				const opacity = (isDragging)? 0 : 1;
				return connectDragSource(connectDropTarget(
						<div
								style={{ 'opacity': opacity }}
						>
								<SectionComponent

								>
										<ControlBarContainer
												currentId={id}
										/>
										<DropAreaComponent
												name="Row"
												index={id}
										/>
								</SectionComponent>
						</div>

				));
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

SectionContainer = DropTarget('CARD', cardTarget, connect => ({
		connectDropTarget: connect.dropTarget()
}))(SectionContainer);
SectionContainer = DragSource('CARD', cardSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
}))(SectionContainer);
export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)