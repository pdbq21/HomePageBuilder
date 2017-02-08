/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ToolbarTabContentComponent from '../components/Toolbar/ToolbarTabContentComponent'
//containers

// actions
import * as actionsToolbar from '../actions/ToolbarActions'

// Application
class ToolbarTabContentContainer extends Component {
    constructor(props) {
        super(props);
        this.handelDragStart = this.handelDragStart.bind(this);
        this.handelDragEnd = this.handelDragEnd.bind(this);
    }

    handelDragStart(event) {
        console.log('drag start');
        // 12 / 6-6 / 4-4-4 ...
        //console.log(event.target.getAttribute('data-col'));
        const cols = event.target.getAttribute('data-col').split('-');

        /*let newColData = [];
        cols.map(function (key) {
            newColData.push({indexCol: key, content: []})
        });*/

        const {ActionOnDragStart} = this.props.mapDispactchToolbar;

         ActionOnDragStart(cols);
        /*event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text", event.target.getAttribute('id'));*/
    }

    handelDragEnd(event) {
        console.log('drag end');
        console.log(event.target);
        const {ActionOnDragEnd} = this.props.mapDispactchToolbar;
        ActionOnDragEnd();
    }

    render() {
        const {activeTab} = this.props.mapStateToolbarNavigation;
        return (
            <ToolbarTabContentComponent
                OnDragStart={this.handelDragStart}
                OnDragEnd={this.handelDragEnd}
                activeTab={activeTab}
            >

            </ToolbarTabContentComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateToolbarNavigation: state.ToolbarNavigationReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchToolbar: bindActionCreators(actionsToolbar, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarTabContentContainer)