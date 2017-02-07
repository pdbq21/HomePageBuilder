/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import SectionComponent from '../components/ConstructorView/SectionComponent';
import RowComponent from '../components/ConstructorView/RowComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'

// Application
class SectionContainer extends Component {
    constructor(props) {
        super(props);
        this.handelDropRow = this.handelDropRow.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOverRow = this.handleDragOverRow.bind(this);

        this.handleClickAddSection = this.handleClickAddSection.bind(this);
    }
    handelDropRow(event, id) {
        // Stop default browser behavior
        //console.log(event, id);
        event.preventDefault();

        const {ActionCreateId, ActionAddNode} = this.props.mapDispactchConstructorView;
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

    handleClickAddSection() {
        //console.log('click Add Section');
        const {id} = this.props;
        const {ActionCreateId, ActionAddNode} = this.props.mapDispactchConstructorView;
        const childrenId = ActionCreateId().nodeId;
        //console.log(id, childrenId);
        ActionAddNode(id, childrenId);
    }

    render() {

        return (
            <SectionComponent >
                <RowComponent>

                </RowComponent>
            </SectionComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state SectionContainer:', state, 'ownProps SectionContainer:', ownProps);
    //console.log(state.ConstructorViewReducer[ownProps.id]);
    return {
mapStateSection: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)