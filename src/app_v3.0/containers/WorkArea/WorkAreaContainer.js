/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
		}

		componentDidMount() {
				// empty
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
				return (
						<WorkAreaComponent
								handleClickAddSection={this.handleClickAddSection}
						>
								{childrenIds.map((childrenId, index) => (
										<SectionContainer
												id={childrenId}
												parentId={id}
												key={`key-${childrenId}-${index}`}
												index={index}

												color="#EC644B"
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
/*
@DragDropContext(HTML5Backend)
@DropTarget(ItemTypes.CARD, cardTarget, connect => ({
		connectDropTarget: connect.dropTarget()
}))*/
export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaContainer)