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


    }



    render() {
        const {columnsIndex} = this.props.mapStateRow;
        const {id, parentId} = this.props;
        // id array the current Section for generating Rows
        const {childrenIds} = this.props.mapStateSection;
        return (
            <RowComponent
                id={id}
            >
                {columnsIndex.map((col, index) => (
                    <ColContainer
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)