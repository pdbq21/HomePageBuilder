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
       // const {id, parentId} = this.props;
        // id array the current Section for generating Rows
        //const {childrenIds} = this.props.mapStateRow;
        return (
            <RowComponent>
                {/*{childrenIds.map((childrenId) => (
                    <ColComponent
                        id={childrenId}
                        parentId={id}
                        key={`key-${childrenId}`}
                    />
                ))}*/}
            </RowComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateRow: state.ConstructorViewReducer[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer)