/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import ConstructorViewBlockComponent from '../components/ConstructorView/ConstructorViewBlockComponent';

// actions
//import * as testActions from '../actions/TestActions'

// Application
class ConstructorViewBlockContainer extends Component {
    render() {

        return (
            <ConstructorViewBlockComponent>

            </ConstructorViewBlockComponent>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorViewBlockContainer)