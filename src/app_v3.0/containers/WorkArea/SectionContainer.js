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
import {DRAG_SECTION} from '../../constants/ItemTypes'
//import components
import SectionComponent from '../../components/WorkArea/SectionComponent'
import DropAreaComponent from '../../components/WorkArea/DropAreaComponent'
// import containers
import ControlBarContainer from './ControlBarContainer'
// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

const sectionSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    }
};


const sectionTarget = {
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
        props.handleMoveSection(dragIndex, hoverIndex);

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
const DropAreaTarget = DropTarget('DROP_ROW', {
    drop(props, monitor, component) {
        props.onDrop(monitor.getItem());
        console.log('drop', props, monitor, component, monitor.getItem());//{ name: 'test_name' };
        return {name: 'Dustbin', testDrop: 'testDrop'};
    }
}, (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
})(DropAreaComponent);
class SectionContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);

        this.handleDropRow = this.handleDropRow.bind(this);
    }

    componentDidMount() {
        // empty
    }

    handleClickAddSection() {

    }

    handleDropRow(id, item){
console.log(id, item.gridType);
        const {ActionCreateNode, ActionAddNode} = this.props.mapDispactchWorkArea;
        const childrenId = ActionCreateNode(id).nodeId;
        // create Row
        ActionAddNode(id, childrenId);
/*
        const {ActionCreateNode, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        // [6, 6] / [4, 4, 4] ...
        const {columns} = this.props.mapStateToolbar;
        // if drop Element columns.length = 0;
        if (columns.length) {
            // create Row
            const childrenIdRow = ActionCreateNode(id).nodeId;
            ActionAddNode(id, childrenIdRow);
            ActionAddColumnsData(childrenIdRow, columns);
// create Row children - Cols
            columns.forEach((col) => {
                //console.log(col, index);
                const childrenId = ActionCreateNode(childrenIdRow).nodeId;
                ActionAddNode(childrenIdRow, childrenId);
                ActionAddColumnsData(childrenId, col);
            });
        }*/
    }

    render() {
        const {id} = this.props;
        const {isDragging, connectDragSource, connectDropTarget, connectDragPreview} = this.props;
        const opacity = (isDragging) ? 0 : 1;

        return connectDragPreview(connectDropTarget(
            <div
                style={{'opacity': opacity}}
            >
                <SectionComponent

                >
                    {connectDragSource(<div>
                        <ControlBarContainer
                            currentId={id}
                        />
                    </div>)}

                    <DropAreaTarget
                        name="Row"
                        index={id}
                        onDrop={item => this.handleDropRow(id, item)}
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

SectionContainer = DropTarget(DRAG_SECTION, sectionTarget, targetCollect)(SectionContainer);
SectionContainer = DragSource(DRAG_SECTION, sectionSource, sourceCollect)(SectionContainer);
export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)