/**
 * Created by ruslan on 07.02.17.
 */
// lib
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import SectionComponent from '../../components/ConstructorView/SectionComponent';
//containers
import RowContainer from './RowContainer'
// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

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
       // console.log('drop');
        event.preventDefault();
        const {ActionCreateId, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        const {columns} = this.props.mapStateToolbar;

        const childrenId = ActionCreateId().nodeId;
        ActionAddNode(id, childrenId);
        ActionAddColumnsData(childrenId, columns);
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
                    <RowContainer
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
        // data only this current Section
        // id={childrenId} => ownProps.id
mapStateSection: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)