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
import PreviewContainer from './PreviewContainer'
//actions

// Application
class BuilderContainer extends Component {

    render() {
        const {isActivePreview} = this.props.mapStateToolbar;
        return (
            <BuilderComponent >
                {(!isActivePreview)? (
                    [<WorkAreaContainer
                        key="key-WorkAreaContainer"
                        id={'id_work_area'}
                    />,
                    <ToolbarContainer
                        key="key-ToolbarContainer"
                    />
                    ]) : (<PreviewContainer />)
                }
            </BuilderComponent>
        );
    }
}

function mapStateToProps(state, other) {
    //console.log('state BuilderContainer', state, other);
    return {
        mapStateToolbar: state.ToolbarReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

BuilderContainer = DragDropContext(HTML5Backend)(BuilderContainer);
export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer)