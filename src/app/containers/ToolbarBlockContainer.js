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
import ToolbarTabContentComponent from '../components/Toolbar/ToolbarTabContentComponent'
// actions
import * as actionsToolbar from '../actions/ToolbarActions'

// Application
class ToolbarBlockContainer extends Component {


    render() {

        //const { ActionsOnClick } = this.props.testActionsDispactch;
        console.log('ToolbarBlockContainer props: ', this.props);
        const { ActionOnDragStart, ActionOnDragEnd } = this.props.mapDispactchToolbar;
        return (
            <ToolbarBlockComponent>
                <ToolbarNavigationComponent />
                <ToolbarTabContentComponent
                    OnDragStart={ActionOnDragStart}
                    OnDragEnd={ActionOnDragEnd}
                />
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
        mapDispactchToolbar: bindActionCreators(actionsToolbar, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarBlockContainer)