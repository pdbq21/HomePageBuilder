/**
 * Created by ruslan on 23.02.17.
 */
// lib
import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import BuilderComponent from '../components/BuilderComponent'
//containers
import WorkAreaContainer from './WorkArea/WorkAreaContainer'
import ToolbarContainer from './Toolbar/ToolbarContainer'
//actions

// Application
class BuilderContainer extends Component {

    render() {
        return (
            <BuilderComponent >
                <WorkAreaContainer
                    id={'id_work_area'}
                />
                <ToolbarContainer />
            </BuilderComponent>
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