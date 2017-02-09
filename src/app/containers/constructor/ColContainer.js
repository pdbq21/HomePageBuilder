/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ColComponent from '../../components/ConstructorView/ColComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class ColContainer extends Component {
    constructor(props) {
        super(props);

        this.handelDropElement = this.handelDropElement.bind(this);
        this.handleDragOverElement = this.handleDragOverElement.bind(this);
    }

    handelDropElement(event, id) {
        // Stop default browser behavior
        event.preventDefault();

        const {ActionCreateId, ActionAddNode, ActionAddColumnsData} = this.props.mapDispactchSection;
        //const {columns} = this.props.mapStateToolbar;

        const childrenId = ActionCreateId().nodeId;
        ActionAddNode(id, childrenId);
        //ActionAddColumnsData(childrenId, columns);
    }

    handleDragOverElement(event) {
        // Stop default browser behavior
        event.preventDefault();
        event.stopPropagation();
        return false;
    }


    render() {
        // todo: const {id, parentId} = this.props; for delete function
        const {id} = this.props;
        // id array the current Section for generating Rows
        //const {childrenIds} = this.props.mapStateRow;
        //const {columnsIndex} = this.props.mapStateRow;
        const {isActiveDragElement} = this.props.mapStateToolbar;

        return (
            <ColComponent
                classNameActiveAddElement={(isActiveDragElement) ? 'pb-area--green' : 'pb-area--gray'}
                col={this.props.col}
                handelDrop={this.handelDropElement}
                handleDragOver={this.handleDragOverElement}
                id={id}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.ConstructorViewReducer[ownProps.id],
        mapStateToolbar: state.ToolbarReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchSection: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColContainer)