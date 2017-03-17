/**
 * Created by ruslan on 23.02.17.
 */
// lib
import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import BuilderComponent from '../components/BuilderComponent'
//containers
import WorkAreaContainer from './WorkArea/WorkAreaContainer'
import ToolbarContainer from './Toolbar/ToolbarContainer'
import PreviewContainer from './Preview/PreviewContainer'
//actions
import * as ToolbarActions from '../actions/ToolbarActions'
// Application
class BuilderContainer extends Component {

    constructor(props) {
        super(props);
        this.handelGetBack = this.handelGetBack.bind(this);
    }

    handelGetBack() {
        const {ActionActivePreview} = this.props.mapDispactchToolbar;
        ActionActivePreview(false);
    }

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
                    ]) :
                    ([<PreviewContainer
                        id={'id_work_area'}
                        key="key-Preview"
                    />,
                        <button
                            key="key-get-back"
                            className="pb-preview-get-back"
                            onClick={this.handelGetBack}
                        >WorkArea</button>
                    ])
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
        mapDispactchToolbar: bindActionCreators(ToolbarActions, dispatch),
    }
}

BuilderContainer = DragDropContext(HTML5Backend)(BuilderContainer);
export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer)