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
import RowContainer from './RowContainer'
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

const DropAreaTarget = DropTarget(['DROP_ROW', 'DRAG_ROW'], {
    drop(props, monitor, component) {
				//console.log('drop', props, monitor, component, monitor.getItem());//{ name: 'test_name' };
        props.onDrop(monitor.getItem());

        return {testDrop: 'testDrop'};
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

        this.handleDropRow = this.handleDropRow.bind(this);
        this.handleMoveRow = this.handleMoveRow.bind(this);
    }

    componentDidMount() {
        // empty
    }
    handleMoveRow(dragIndex, hoverIndex) {
        const {id} = this.props;
        const {ActionMoveSection} = this.props.mapDispactchWorkArea;
        ActionMoveSection(id, dragIndex, hoverIndex);
    }

    handleDropRow(id, item) {
        // id => parentId section; item => {gridType: '6-6'} / item => {id: '', index: 0, parentId: ''}

        if (typeof item.gridType !== 'undefined') {
						const {ActionCreateNode, ActionAddNode, ActionGridIndex} = this.props.mapDispactchWorkArea;
						const childrenIdRow = ActionCreateNode(id).nodeId;
						// create Row
						ActionAddNode(id, childrenIdRow);
            // create Row children - Cols
						// item.gridType => 6-6/3-3-3-3 ... split('-') => [6, 6,]
						item.gridType.split('-').forEach((gridIndex) => {
								const childrenId = ActionCreateNode(childrenIdRow).nodeId;
								// create Col
								ActionAddNode(childrenIdRow, childrenId);
								// example: add gridIndex: 6
								ActionGridIndex(childrenId, gridIndex);
						});
				}else{
						console.log(id, item.id, item.parentId);
						// id => drop parentId; item.id => drag id; item.parentId => drag parentId
						const {ActionExchangeNodeRemove, ActionExchangeNodeAdd} = this.props.mapDispactchWorkArea;
						ActionExchangeNodeRemove(item.parentId, item.id);
						ActionExchangeNodeAdd(id, item.id)
        }

    }

    render() {
        const {id} = this.props;
        const {isDragging, connectDragSource, connectDropTarget, connectDragPreview} = this.props;
        const opacity = (isDragging) ? 0 : 1;
        const {childrenIds} = this.props.mapStateSection;
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
                    {(childrenIds.length) ?
                        (childrenIds.map((childrenId, index) => (
                            <RowContainer
                                id={childrenId}
                                parentId={id}
                                index={index}
                                key={`key-${childrenId}`}

                                handleMoveRow={this.handleMoveRow}
                            />
                        ))) :
                        (<DropAreaTarget
                            name="Row"
                            onDrop={item => this.handleDropRow(id, item)}
                        />)
                    }

                </SectionComponent>
            </div>
        ));
    }
}


function mapStateToProps(state, ownProps) {
    //console.log('state Section', state);
    return {
        mapStateWorkArea: state.WorkAreaReducer,
        mapStateSection: state.WorkAreaReducer[ownProps.id],
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