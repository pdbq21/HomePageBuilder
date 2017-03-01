/**
 * Created by ruslan on 23.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {DropTarget} from 'react-dnd';
// components
import ElementComponent from '../../components/WorkArea/ElementComponent'
//containers
// actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

function DropAreaElement(props) {
		const {canDrop, isOver, connectDropTarget} = props;
		const isActive = canDrop && isOver;
		let styles;

		if (isActive) {
				styles = {
						'visibility': 'visible',
						'background': 'linear-gradient(0deg, #14af35 0%, rgba(255, 255, 255, 0) 100%)'
				};
		} else if (canDrop) {
				styles = {'visibility': 'visible'};
		}
		return connectDropTarget(
        <div
            className="pb-drop-zone"
            style={styles}
        />
		);
}

const DropAreaElementTarget = DropTarget('DROP_ELEMENT', {
		drop(props, monitor) {

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
class ElementContainer extends Component {
		constructor(props) {
				super(props);
				this.handleDropElement = this.handleDropElement.bind(this);
		}

		handleDropElement(parentId, id, item){
		    // parentId => id Col; id => drop id Element; item => {elementType: 'Text'/'Image' ..}
//console.log('drop element', parentId, id, item);
				const {ActionCreateNode, ActionAddNode, ActionElementType} = this.props.mapDispactchWorkArea;
				const childrenIdElement = ActionCreateNode(parentId).nodeId;
				// create Element
				ActionAddNode(parentId, childrenIdElement);
				// add element type => Text/Image/Button...
				ActionElementType(childrenIdElement, item.elementType);
    }


		render() {
				const {elementType} = this.props.mapStateElement;
				const {id, parentId, handleContextMenu} = this.props;

				return (
				    <div>
                <ElementComponent
                    handleClickContextMenu={(event) => handleContextMenu(event, id, parentId)}
                    type={elementType}
                >
                </ElementComponent>
                <DropAreaElementTarget
                    onDrop={item => this.handleDropElement(parentId, id, item)}
                />
            </div>
				);
		}
}

function mapStateToProps(state, ownProps) {
		return {
				mapStateElement: state.WorkAreaReducer[ownProps.id],
				mapStateWorkArea: state.WorkAreaReducer,
		}
}

function mapDispatchToProps(dispatch) {
		return {
				mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementContainer)