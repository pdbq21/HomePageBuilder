/**
 * Created by ruslan on 30.01.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import BuilderBlock from '../components/BuilderBlockComponent'
// actions
//import * as testActions from '../actions/TestActions'

// Application
class Builder extends Component {
    render() {

        return (
            <BuilderBlock />
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

export default connect(mapStateToProps, mapDispatchToProps)(Builder)