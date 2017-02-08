/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import RowComponent from '../../components/ConstructorView/RowComponent';
import ColComponent from '../../components/ConstructorView/ColComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../../actions/ConstructorViewActions'

// Application
class RowContainer extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        // todo: const {id, parentId} = this.props; for delete function
       // const {id, parentId} = this.props;
        // id array the current Section for generating Rows
        //const {childrenIds} = this.props.mapStateRow;
        const {columnsIndex} = this.props.mapStateRow;
        const {isActiveDragElement} = this.props.mapStateToolbar;

        return (
            <RowComponent>
                {columnsIndex.map((col, index) => (
                    <ColComponent
                        classNameActiveAddElement={(isActiveDragElement) ? 'pb-area--green' : 'pb-area--gray'}
                        col={col}
                        key={`key-${col}-${index}`}
                    />
                ))}
            </RowComponent>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)