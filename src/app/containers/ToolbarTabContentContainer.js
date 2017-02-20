/**
 * Created by ruslan on 08.02.17.
 */
// lib
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// components
import ToolbarTabContentComponent from '../components/Toolbar/ToolbarTabContentComponent'
import {StructurePanel, ContentPanel, TemplatesPanel} from '../components/Toolbar/TabContentComponents.js'
import {EditPanelNavigation, EditPanel} from '../components/Toolbar/TabEditPanelComponent.js'
//containers

// actions
import * as actionsToolbar from '../actions/ToolbarActions'
import * as actionsEditPanel from '../actions/EditPanelActions'

// Application
class ToolbarTabContentContainer extends Component {
    constructor(props) {
        super(props);
        this.handelDragStartRow = this.handelDragStartRow.bind(this);
        this.handelDragEndRow = this.handelDragEndRow.bind(this);
        this.handelDragStartContent = this.handelDragStartContent.bind(this);
        this.handelDragEndContent = this.handelDragEndContent.bind(this);
// edit panel
        this.handelChangeBackgroundColor = this.handelChangeBackgroundColor.bind(this);
        this.handelChangeImage = this.handelChangeImage.bind(this);

        this.handelEditPanelNavigation = this.handelEditPanelNavigation.bind(this);
// render component functions
        this.renderTabContent = this.renderTabContent.bind(this);
        this.renderTabEdit = this.renderTabEdit.bind(this);
    }

    handelDragStartRow(event) {
        //console.log('drag start');
        // 12 / 6-6 / 4-4-4 ...
        //console.log(event.target.getAttribute('data-col'));
        const dataAttr = event.target.getAttribute('data-col').split('-');
        const {ActionOnDragStart} = this.props.mapDispactchToolbar;
        ActionOnDragStart(dataAttr, 'data-col');
        /*event.dataTransfer.dropEffect = "move";
         event.dataTransfer.setData("text", event.target.getAttribute('id'));*/
    }

    handelDragEndRow() {
        //console.log('drag end');
        // console.log(event.target);
        const {ActionOnDragEnd} = this.props.mapDispactchToolbar;
        ActionOnDragEnd('data-col');
    }

    handelDragStartContent(event) {
        // Text / Image / Button ...
        //console.log(event.target.getAttribute('data-elementType'));
        const dataAttr = event.target.getAttribute('data-elementType');
        const {ActionOnDragStart} = this.props.mapDispactchToolbar;
        ActionOnDragStart(dataAttr, 'data-elementType');
    }

    handelDragEndContent() {
        const {ActionOnDragEnd} = this.props.mapDispactchToolbar;
        ActionOnDragEnd('data-elementType');
    }

    handelChangeBackgroundColor(color) {
        const {ActionChangeBackgroundColor} = this.props.mapDispactchEditPanel;
        const {idActiveStructure} = this.props.mapStateEditPanel;

        ActionChangeBackgroundColor(idActiveStructure, color);
    }

    handelChangeImage(path) {
        console.log(path);
    }

    handelEditPanelNavigation(event){
        const {ActionSelectEditPanelNavigation} = this.props.mapDispactchEditPanel;
        // Content / Styles
        ActionSelectEditPanelNavigation(event.target.textContent);
    }

    renderTabContent() {
        const {activeTab} = this.props.mapStateToolbarReducer;

        switch (activeTab) {
            case 'Rows':
                return <StructurePanel
                    OnDragStart={this.handelDragStartRow}
                    OnDragEnd={this.handelDragEndRow}
                />;
            case 'Elements':
                return <ContentPanel
                    OnDragStart={this.handelDragStartContent}
                    OnDragEnd={this.handelDragEndContent}
                />;
            case 'Templates':
                return <TemplatesPanel />;
            /*            case 'Edit':
             return <EditPanel />;*/
            default:
                console.error('Error: other tab name', activeTab);
        }
    }

    renderTabEdit() {
// Todo: залежно від вибраної структури генерити EditPanel
        const {activeTab, tabs} = this.props.mapStateEditPanel;

        return (
            [<EditPanelNavigation
            key='key-tab-edit-0'
            handelEditPanelNavigation={this.handelEditPanelNavigation}
            activeTab={activeTab}
            navigationTabs={tabs}
            />,
                <EditPanel
                    key='key-tab-edit-1'
                    onChange={this.handelChangeBackgroundColor}
                    onChangeImage={this.handelChangeImage}
                    activeTab={activeTab}
                />]
        )
    }

    render() {
        const {isActiveEditPanel} = this.props.mapStateEditPanel;
        return (
            <ToolbarTabContentComponent >
                {(isActiveEditPanel) ? this.renderTabEdit() : this.renderTabContent()}
            </ToolbarTabContentComponent>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mapStateToolbarReducer: state.ToolbarReducer,
        mapStateEditPanel: state.EditPanelReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchToolbar: bindActionCreators(actionsToolbar, dispatch),
        mapDispactchEditPanel: bindActionCreators(actionsEditPanel, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarTabContentContainer)