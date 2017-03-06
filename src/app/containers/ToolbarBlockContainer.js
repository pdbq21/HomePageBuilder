/**
 * Created by ruslan on 01.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ToolbarBlockComponent from '../components/Toolbar/ToolbarBlockComponent'
import ToolbarNavigationComponent from '../components/Toolbar/ToolbarNavigationComponent'
// container
import ToolbarTabContentContainer from './ToolbarTabContentContainer'
// actions
import * as actionsToolbar from '../actions/ToolbarActions'

// Application
class ToolbarBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.handelNavigation = this.handelNavigation.bind(this);
    }

    handelNavigation(event) {
        const {ActionSelectNavigation} = this.props.mapDispactchToolbar;
        //console.log(event.target.parentNode.textContent);
        // Rows / Elements / Templates / Edit
        ActionSelectNavigation(event.target.textContent);
    }

    render() {
        //console.log('ToolbarBlockContainer props: ', this.props);
        const {activeTab, tabs} = this.props.mapStateToolbarReducer;
        const {isActiveEditPanel} = this.props.mapStateEditPanel;

        return (
            <ToolbarBlockComponent>
                <ToolbarNavigationComponent
                    onClickNavigation={this.handelNavigation}
                    navigationTabs={tabs}
                    activeTab={activeTab}
                    isActiveEditPanel={isActiveEditPanel}
                />
                <ToolbarTabContentContainer />
            </ToolbarBlockComponent>
        );
    }
}

function mapStateToProps(state) {
    return {
        mapStateToolbarReducer: state.ToolbarReducer,
        mapStateEditPanel: state.EditPanelReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchToolbar: bindActionCreators(actionsToolbar, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarBlockContainer)