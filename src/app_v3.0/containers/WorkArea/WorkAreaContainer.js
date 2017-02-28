/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
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

        this.handleMoveSection = this.handleMoveSection.bind(this);
        this.handleMoveRow = this.handleMoveRow.bind(this);
    }

    componentDidMount() {
        // empty
    }

    handleMoveSection(dragIndex, hoverIndex) {
        const {id} = this.props;
        const {ActionMoveSection} = this.props.mapDispactchWorkArea;
        ActionMoveSection(id, dragIndex, hoverIndex);
    }

    handleMoveRow(dragIndex, hoverIndex, item, component) {
        // hover => component; drag => item;
        const {id, parentId, index} = component;
        console.log(item, id, parentId, index);
        const {ActionMoveRow} = this.props.mapDispactchWorkArea;

        if (item.parentId === parentId){
						ActionMoveRow(item.parentId, dragIndex, hoverIndex);
        }else{
            // Todo: remove drag.id in old Section, add in new Section
						const {ActionExchangeNodeRemove, ActionExchangeNodeAdd} = this.props.mapDispactchWorkArea;
						ActionExchangeNodeRemove(item.parentId, item.id);
						ActionExchangeNodeAdd(parentId, item.id);
						console.log(item, id, parentId, index);
        }
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
                        key={`key-${childrenId}`}
                        index={index}

                        color="#EC644B"

                        handleMoveSection={this.handleMoveSection}
                        handleMoveRow={this.handleMoveRow}
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

//WorkAreaContainer = DragDropContext(HTML5Backend)(WorkAreaContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaContainer)
