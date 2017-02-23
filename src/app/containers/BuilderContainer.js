/**
 * Created by ruslan on 30.01.17.
 */
// lib
import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import BuilderBlockComponent from '../components/BuilderBlockComponent'
//containers
import ConstructorViewBlockContainer from './constructor/ConstructorViewContainer'
import ToolbarBlockContainer from './ToolbarBlockContainer'

// actions

// Application
class BuilderContainer extends Component {

    render() {

        return (
            <BuilderBlockComponent >
                <ConstructorViewBlockContainer
                    id={0}
                />
                <ToolbarBlockContainer />
            </BuilderBlockComponent>
    );
    }
}

function mapStateToProps(state, other) {
    //console.log('state BuilderContainer', state, other);
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

BuilderContainer = DragDropContext(HTML5Backend)(BuilderContainer);
export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer)