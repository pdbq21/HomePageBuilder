/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import ToolbarBlockComponent from '../components/Toolbar/ToolbarBlockComponent'
import ToolbarNavigationComponent from '../components/Toolbar/ToolbarNavigationComponent'
import ToolbarTabContentComponent from '../components/Toolbar/ToolbarTabContentComponent'
// actions
//import * as testActions from '../actions/TestActions'

// Application
class ToolbarBlockContainer extends Component {
    render() {

        return (
                <ToolbarBlockComponent>
                    <ToolbarNavigationComponent />
                    <ToolbarTabContentComponent />
                </ToolbarBlockComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarBlockContainer)