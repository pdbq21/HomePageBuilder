/**
 * Created by ruslan on 10.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import BarMenuComponent from '../components/BarMenuComponent';
//containers

// actions
//import * as testActions from '../actions/TestActions'
import * as actionsConstructorView from '../actions/ConstructorViewActions'
import * as actionsToolbar from '../actions/ToolbarActions'
import * as actionsEditPanel from '../actions/EditPanelActions'

// Application
class BarMenuContainer extends Component {
    constructor(props) {
        super(props);

        this.handelBlurBarMenu = this.handelBlurBarMenu.bind(this);
        this.handelClickBarMenu = this.handelClickBarMenu.bind(this);
        this.handelClickRemove = this.handelClickRemove.bind(this);

        this.handleMove = this.handleMove.bind(this);
        this.handleMoveEnd = this.handleMoveEnd.bind(this);

        this.handleActiveEditPanel = this.handleActiveEditPanel.bind(this);

    }

    handelBlurBarMenu(id) {
        const {ActionToggleBarMenuBlur} = this.props.mapDispactchConstructorView;
        //Todo: need change this logic
        setTimeout(function () {
            ActionToggleBarMenuBlur(id);
        }, 200);
    }

    handelClickBarMenu(id) {
        const {ActionToggleBarMenu} = this.props.mapDispactchConstructorView;
        ActionToggleBarMenu(id);
    }

    handelClickRemove(id) {
        const {ActionRemoveChild, ActionDeleteNode} = this.props.mapDispactchConstructorView;
        const {ActionDeleteNodeStyles} = this.props.mapDispactchEditPanel;

        ActionRemoveChild(this.props.parentId, id);
        ActionDeleteNode(id);

        ActionDeleteNodeStyles(id);
    }

    handleMove(id) {
        const {type} = this.props;
        const {ActionMove, ActionIsActiveExchangeStructure} = this.props.mapDispactchConstructorView;
        ActionMove(id);
        ActionIsActiveExchangeStructure(true, type);
    }

    handleMoveEnd(id) {
        const {type} = this.props;
        const {ActionMoveEnd, ActionIsActiveExchangeStructure} = this.props.mapDispactchConstructorView;
        ActionMoveEnd(id);
        ActionIsActiveExchangeStructure(false, type);
    }

    handleActiveEditPanel(id, parentId){
// id - Row id; parentId - Section id;
        console.log('id: ',id,'parentId: ', parentId);
        const { ActionIsActiveEditPanel, ActionCreateNodeStyles } = this.props.mapDispactchEditPanel;
        const {ActionActivateEditPanel, ActionDeactivateEditPanel} = this.props.mapDispactchConstructorView;
        const {isActiveEditPanel, idActiveStructure} = this.props.mapStateEditPanel;

        if (idActiveStructure === id){
            ActionDeactivateEditPanel(idActiveStructure);
            ActionIsActiveEditPanel('', false);
        }else{
            if (isActiveEditPanel === false) {
                // на даному етапі тільки активує структуру
                ActionActivateEditPanel(id);
                // need if first time

            } else if (isActiveEditPanel === true){
                // деактивує попереднню активну структуру
                ActionDeactivateEditPanel(idActiveStructure);
                // активує поточну структуру
                ActionActivateEditPanel(id);

            }
            ActionCreateNodeStyles(id);
            // додає id активної структури для Edit Panel
            ActionIsActiveEditPanel(id, true);
        }



        /*const {ActionActiveEditPanel} = this.props.mapDispactchConstructorView;
        const {ActionEditPanel} = this.props.mapDispactchToolbar;
        ActionActiveEditPanel(id);
        ActionEditPanel();*/

    }

    render() {
        const {id, positionMenu, name, type, parentId} = this.props;
        const {isActiveMenu} = this.props.mapStateBarMenu;
        return (
            <BarMenuComponent
                handelClickBarMenu={this.handelClickBarMenu}
                handelBlurBarMenu={this.handelBlurBarMenu}
                handelClickRemove={this.handelClickRemove}
                handleActiveEditPanel={this.handleActiveEditPanel}

                classActiveMenu={(isActiveMenu) ? 'is-active' : ''}

                positionMenu={positionMenu}
                id={id}
                parentId={parentId}
                name={name}
                type={type}
                handleMove={this.handleMove}
                handleMoveEnd={this.handleMoveEnd}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log('state SectionContainer:', state, 'ownProps SectionContainer:', ownProps);
    return {
        mapStateBarMenu: state.ConstructorViewReducer[ownProps.id],
        mapStateEditPanel: state.EditPanelReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchConstructorView: bindActionCreators(actionsConstructorView, dispatch),
        mapDispactchToolbar: bindActionCreators(actionsToolbar, dispatch),
        mapDispactchEditPanel: bindActionCreators(actionsEditPanel, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarMenuContainer)