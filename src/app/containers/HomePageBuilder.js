/**
 * Created by ruslan on 30.01.17.
 */
// lib
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
//import TestComponent from '../components/TestComponent'
// actions
//import * as testActions from '../actions/TestActions'

// Application
class HomePageBuilder extends Component {
    render() {

        return (<div className='row'>
            {/* add component */}
        </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageBuilder)