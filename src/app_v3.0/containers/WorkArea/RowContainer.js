/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {DropTarget} from 'react-dnd';

// import actions
import * as WorkAreaActions from '../../actions/WorkAreaActions'

//import container
import ColContainer from './ColContainer'
import ControlBarContainer from './ControlBarContainer'

//import component
import RowComponent from '../../components/WorkArea/RowComponent'


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
        const {id, parentId} = this.props;
        const {childrenIds} = this.props.mapStateRow;
        return (
            <RowComponent>
                <ControlBarContainer
                    currentId={id}
                />
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
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.WorkAreaReducer[ownProps.id],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchWorkArea: bindActionCreators(WorkAreaActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)