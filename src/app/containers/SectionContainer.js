/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import SectionComponent from '../components/ConstructorView/SectionComponent';
import RowComponent from '../components/ConstructorView/RowComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../actions/ConstructorViewActions'

// Application
class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.handelDropRow = this.handelDropRow.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOverRow = this.handleDragOverRow.bind(this);
    }

    handelDropRow(event, id) {
        // Stop default browser behavior
        //console.log(event, id);
        event.preventDefault();
        const {ActionCreateId, ActionAddNode} = this.props.mapDispactchSection;
        //const {id} = this.props;
        //const {rowIds} = this.props.mapStateConstructorViewReducer;

        const childrenId = ActionCreateId().nodeId;
        ActionAddNode(id, childrenId);
        //const {createIdAction, addNewSectionAction, onDropAction} = this.props;
        //const {createIdAction, ActionAddRow, id} = this.props;
        //const childId = createNode().nodeId
        //addChild(id, childId)
        //const sectionId = createIdAction().nodeId;
        //addNewSectionAction(id, sectionId);
        //id, name
        //this.props.onDropSectionAction();
    }

    handleDragOverRow(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    handleDragLeave(event) {
        // Stop default browser behavior
        event.preventDefault();
    }

    render() {
        const {activeDragStructure} = this.props.mapStateToolbar;
        //Todo: use this parentId for delete function
        const {id, parentId} = this.props;
        // id array the current Section for generating Rows
        const {childrenIds} = this.props.mapStateSection;
        //console.log(` id = ${id} / parentId = ${parentId} / state:`,childrenIds );
        return (
            <SectionComponent
                classNameActiveAddSection={(activeDragStructure) ? 'pb-area--green' : ''}
                handelDrop={this.handelDropRow}
                handleDragOver={this.handleDragOverRow}
                id={id}
            >
                {childrenIds.map((childrenId) => (
                    <RowComponent
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                    />
                ))}
            </SectionComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state SectionContainer:', state, 'ownProps SectionContainer:', ownProps);
    //console.log(state.ConstructorViewReducer[ownProps.id]);
    return {
        mapStateToolbar: state.ToolbarReducer,
mapStateSection: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)