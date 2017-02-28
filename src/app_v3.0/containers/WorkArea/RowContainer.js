/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd';

//import ItemTypes for Drag'n'Drop
import {DRAG_ROW} from '../../constants/ItemTypes'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

//import container
import ColContainer from './ColContainer'
import ControlBarContainer from './ControlBarContainer'

//import component
import RowComponent from '../../components/WorkArea/RowComponent'

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

				props.handleMoveRow(dragIndex, hoverIndex, monitor.getItem(), component.props);
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

function DropAreaRow(props) {
    const {canDrop, isOver,connectDropTarget} = props;
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

const DropAreaRowTarget = DropTarget('DROP_ROW', {
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
})(DropAreaRow);

class RowContainer extends Component {
    constructor(props) {
        super(props);

        this.handleDropRow = this.handleDropRow.bind(this);
    }

    componentDidMount() {
        // empty
    }
    componentWillMount() {
        // empty
    }


    handleDropRow(parentId, id, item) {
        // parentId === id section / id === id row /
        // item => {gridType: '6-6'}
        const {ActionCreateNode, ActionAddNode, ActionGridIndex} = this.props.mapDispactchWorkArea;

        const childrenIdRow = ActionCreateNode(parentId).nodeId;
        // create Row
        ActionAddNode(parentId, childrenIdRow, id);

        // create Row children - Cols
        // item.gridType => 6-6/3-3-3-3 ... split('-') => [6, 6,]
        item.gridType.split('-').forEach((gridIndex) => {
            const childrenId = ActionCreateNode(childrenIdRow).nodeId;
            // create Col
            ActionAddNode(childrenIdRow, childrenId);
            // example: add gridIndex: 6
            ActionGridIndex(childrenId, gridIndex);
        });
    }

    render() {

        const {id, parentId, opacityId} = this.props;
        const {childrenIds} = this.props.mapStateRow;
        const {isDragging, connectDragSource, connectDropTarget, connectDragPreview} = this.props;
        const opacity = (isDragging || opacityId) ? 0 : 1;

        return connectDragPreview(connectDropTarget(
            <div
                style={{'opacity': opacity}}
            >
            <RowComponent>
                {connectDragSource(<div>
                    <ControlBarContainer
                        currentId={id}
                    />
                </div>)}
                {
                    childrenIds.map((childrenId, index) => (

                        <ColContainer
                            id={childrenId}
                            parentId={id}
                            index={index}
                            key={`key-${childrenId}`}
                        />

                    ))
                }
                <DropAreaRowTarget
                    onDrop={item => this.handleDropRow(parentId, id, item)}
                />
            </RowComponent>
            </div>
        ));
    }
}
function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.WorkAreaReducer[ownProps.id],
        mapStateWorkArea: state.WorkAreaReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}

RowContainer = DropTarget(DRAG_ROW, sectionTarget, targetCollect)(RowContainer);
RowContainer = DragSource(DRAG_ROW, sectionSource, sourceCollect)(RowContainer);
export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)