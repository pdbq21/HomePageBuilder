/**
 * Created by ruslan on 23.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom';
import TinyMCE from 'react-tinymce';
import {DragSource, DropTarget} from 'react-dnd';
//import ItemTypes for Drag'n'Drop
import {DRAG_ELEMENT} from '../../constants/ItemTypes'
// components
import ElementComponent from '../../components/WorkArea/ElementComponent'
//containers
// actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

const sectionSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
            parentId: props.parentId
        };
    },
    endDrag(props){
        const {ActionActiveOpacity} = props.mapDispactchWorkArea;
        ActionActiveOpacity('');
    }
};

const sectionTarget = {
    hover(props, monitor, component) {

        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        const dragParentId = monitor.getItem().parentId;
        const hoverParentId = component.props.parentId;


        // Don't replace items with themselves
        if (dragIndex === hoverIndex && dragParentId === hoverParentId) {
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
        /*console.log(props, component.props, monitor.getItem())
         if (component.props.parentId === monitor.getItem().parentId){
         props.handleMoveRow(dragIndex, hoverIndex);
         } else {
         props.handleMoveRow(dragIndex, hoverIndex, monitor.getItem());
         }*/

        props.handleMoveElement(dragIndex, hoverIndex, monitor.getItem(), component.props);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    }
};

const targetCollect = connect => ({
    connectDropTarget: connect.dropTarget()
});

const sourceCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
});


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
        this.handleTextEditor = this.handleTextEditor.bind(this);
    }

    handleDropElement(parentId, item) {
        // parentId => id Col; id => drop id Element; item => {elementType: 'Text'/'Image' ..}
//console.log('drop element', parentId, id, item);
        const {ActionCreateNode, ActionAddNode, ActionElementType} = this.props.mapDispactchWorkArea;
        const childrenIdElement = ActionCreateNode(parentId).nodeId;
        // create Element
        ActionAddNode(parentId, childrenIdElement);
        // add element type => Text/Image/Button...
        ActionElementType(childrenIdElement, item.elementType);
    }

    handleTextEditor() {
        const {isActiveTextEdit} = this.props.mapStateWorkArea;
        if (isActiveTextEdit === false){
            const {ActionActiveTextEdit} = this.props.mapDispactchWorkArea;
            ActionActiveTextEdit(true);
        }
    }

    render() {
        const {elementType, link} = this.props.mapStateElement;
        const {defaultStyle} = this.props.mapStateEditPanel;
        const {isActiveTextEdit} = this.props.mapStateWorkArea;
        const {id, parentId, activeStructureId, handleContextMenu} = this.props;//opacityId
        const {connectDragSource, connectDropTarget} = this.props;// isDragging
        //const opacity = (isDragging || (opacityId === id)) ? 0 : 1;
        const classActiveStructure = (activeStructureId === id) ? 'pb-active-box' : '';
        //const boxShadow = (activeStructureId === id) ? 'inset 0 0 0 10px #4caf50' : 'none';
        const styles = (typeof this.props.mapStateEditPanel[id] === "undefined") ?
            defaultStyle[elementType] :
            this.props.mapStateEditPanel[id].currentStyle;

        if (typeof elementType === "undefined") {
            return <div></div>;
        }

        return connectDropTarget(
            <div
                className={classActiveStructure}
            >
                {connectDragSource(<div
                draggable={!isActiveTextEdit}
                >
                    <ElementComponent
                        styles={styles}
                        handleClickContextMenu={(event) => handleContextMenu(event, id, parentId, elementType)}
                        handleTextEditor={this.handleTextEditor}
                        type={elementType}
                        link={link}
                        TinyMCE={TinyMCE}
                    >
                    </ElementComponent>
                </div>)}

                <DropAreaElementTarget
                    onDrop={item => this.handleDropElement(parentId, item)}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateElement: state.WorkAreaReducer[ownProps.id],
        mapStateWorkArea: state.WorkAreaReducer,
        mapStateEditPanel: state.EditPanelReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}

ElementContainer = DropTarget(DRAG_ELEMENT, sectionTarget, targetCollect)(ElementContainer);
ElementContainer = DragSource(DRAG_ELEMENT, sectionSource, sourceCollect)(ElementContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ElementContainer)