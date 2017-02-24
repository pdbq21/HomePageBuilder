/**
 * Created by ruslan on 24.02.17.
 */

// lib
import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//actions
import * as ToolbarActions from '../../actions/ToolbarActions'
//import component
import RowsPanelComponent from '../../components/Toolbar/ContentMenu/ContentPanels/RowsPanelComponent'


// Application
class ContentPanelsContainer extends Component {

		render() {
				const { connectDragSource } = this.props;
				return (
						<div>
										<RowsPanelComponent
												connectDragSource={connectDragSource}
										/>
						</div>

				);
		}
}

function mapStateToProps(state) {
		return {
				mapStateWorkArea: state.WorkAreaReducer,
				mapStateToolbar: state.ToolbarReducer
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(ToolbarActions, dispatch)
		}
}




ContentPanelsContainer = DragSource('BOX', {
		beginDrag(props) {
				return {
						name: props.name
				};
		},

		endDrag(props, monitor) {
				const item = monitor.getItem();
				const dropResult = monitor.getDropResult();

				if (dropResult) {
						window.alert( // eslint-disable-line no-alert
								`You dropped ${item.name} into ${dropResult.name}!`
						);
				}
		}
}, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
}))(ContentPanelsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanelsContainer)