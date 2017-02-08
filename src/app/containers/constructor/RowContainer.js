/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import RowComponent from '../../components/ConstructorView/RowComponent';
//containers
import ColContainer from './ColContainer';
// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class RowContainer extends Component {
    constructor(props) {
        super(props);
        this.renderColContainer = this.renderColContainer.bind(this)
    }


    renderColContainer(id){

        const {ActionCreateId, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        // [6, 6] / [4, 4, 4] ...
        //const {columns} = this.props.mapStateToolbar;

        /*columns.map((colIndex) => {
         const childrenId = ActionCreateId().nodeId;
         ActionAddNode(id, childrenId);
         ActionAddColumnsData(childrenId, colIndex);
         });*/
        const childrenId = ActionCreateId().nodeId;
        ActionAddNode(id, childrenId);
        //ActionAddColumnsData(childrenId, columns);

        console.log(this.props.mapStateRow);
        const {columnsIndex} = this.props.mapStateRow;


        columnsIndex.map((col, index) => (
            <ColContainer
                col={col}
                key={`key-${col}-${index}`}
            />
        ))
    }

    render() {
        const {id, parentId} = this.props;
        // id array the current Section for generating Rows
        //const {childrenIds} = this.props.mapStateSection;
        return (
            <RowComponent
                id={id}
            >
                {this.renderColContainer(this.props.id)}
            </RowComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.ConstructorViewReducer[ownProps.id],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)