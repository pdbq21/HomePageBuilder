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

// Application
class BarMenuContainer extends Component {
    constructor(props) {
        super(props);

        this.handelBlurBarMenu = this.handelBlurBarMenu.bind(this);
        this.handelClickBarMenu = this.handelClickBarMenu.bind(this);
        this.handelClickRemove = this.handelClickRemove.bind(this);

        this.handleMove = this.handleMove.bind(this);
        this.handleMoveEnd = this.handleMoveEnd.bind(this);

        this.handleActiveEdit = this.handleActiveEdit.bind(this);

    }

    handelBlurBarMenu(id) {
        const {ActionToggleBarMenuBlur} = this.props.mapDispactchBarMenu;
        //Todo: need change this logic
        setTimeout(function () {
            ActionToggleBarMenuBlur(id);
        }, 200);
    }

    handelClickBarMenu(id) {
        const {ActionToggleBarMenu} = this.props.mapDispactchBarMenu;
        ActionToggleBarMenu(id);
    }

    handelClickRemove(id) {
        const {ActionRemoveChild, ActionDeleteNode} = this.props.mapDispactchBarMenu;
        ActionRemoveChild(this.props.parentId, id);
        ActionDeleteNode(id);
    }

    handleMove(id) {
        const {type} = this.props;
        const {ActionMove, ActionIsActiveExchangeStructure} = this.props.mapDispactchBarMenu;
        ActionMove(id);
        ActionIsActiveExchangeStructure(true, type);
    }

    handleMoveEnd(id) {
        const {type} = this.props;
        const {ActionMoveEnd, ActionIsActiveExchangeStructure} = this.props.mapDispactchBarMenu;
        ActionMoveEnd(id);
        ActionIsActiveExchangeStructure(false, type);
    }

    handleActiveEdit(id, parentId){

console.log(id, parentId);
        const {ActionActiveEditPanel} = this.props.mapDispactchBarMenu;
        ActionActiveEditPanel(id);
    }

    render() {
        const {id, positionMenu, name, type, parentId} = this.props;
        const {isActiveMenu} = this.props.mapStateBarMenu;
        return (
            <BarMenuComponent
                handelClickBarMenu={this.handelClickBarMenu}
                handelBlurBarMenu={this.handelBlurBarMenu}
                handelClickRemove={this.handelClickRemove}
                handleActiveEdit={this.handleActiveEdit}

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
        mapStateBarMenu: state.ConstructorViewReducer[ownProps.id]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchBarMenu: bindActionCreators(actionsConstructorView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarMenuContainer)