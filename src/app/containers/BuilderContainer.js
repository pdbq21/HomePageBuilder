/**
 * Created by ruslan on 30.01.17.
 */
// lib
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import BuilderBlockComponent from '../components/BuilderBlockComponent'
//containers
import ConstructorViewBlockContainer from './ConstructorViewBlockContainer'
import ToolbarBlockContainer from './ToolbarBlockContainer'

// actions
//import * as testActions from '../actions/TestActions'

// Application
class BuilderContainer extends Component {
    render() {

        return (
            <BuilderBlockComponent>
                <ConstructorViewBlockContainer />
                <ToolbarBlockContainer />
            </BuilderBlockComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer)