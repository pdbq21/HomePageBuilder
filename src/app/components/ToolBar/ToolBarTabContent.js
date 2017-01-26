/**
 * Created by ruslan on 20.01.17.
 */
import React from 'react'

import ToolBarBody from './ToolBarBody'

function ContentTabStructure(props) {
    return (<div id="pb-tab-structure"
                 onDragStart={props.onDragStart}
                 onDragEnd={props.onDragEnd}
    >
        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-12"
        >
            <span className="block block-12"></span>
        </div>

        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-6-6"
        >
            <span className="block block-6"></span>
            <span className="block block-6"></span>
        </div>

        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-4-8"
        >
            <span className="block block-4"></span>
            <span className="block block-8"></span>
        </div>

        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-8-4"
        >
            <span className="block block-8"></span>
            <span className="block block-4"></span>
        </div>

        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-4-4-4"
        >
            <span className="block block-4"></span>
            <span className="block block-4"></span>
            <span className="block block-4"></span>
        </div>

        <div className="pb-element pb-structure-element"
             draggable="true"
             id="elementStructure-3-3-3-3"
        >
            <span className="block block-3"></span>
            <span className="block block-3"></span>
            <span className="block block-3"></span>
            <span className="block block-3"></span>
        </div>
    </div>)
}

function ContentTabContent(props) {
    return (<div id="pb-tab-content"
                 onDragStart={props.onDragStart}
                 onDragEnd={props.onDragEnd}
    >

        <div className="pb-element pb-content-element"
             draggable="true"
             id="elementContent-Text"
        >
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-font icon" aria-hidden="true"></span>
                <span className="text">Text</span>
            </div>
        </div>

        <div className="pb-element pb-content-element"
             draggable="true"
             id="elementContent-Image"
        >
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-picture icon" aria-hidden="true"></span>
                <span className="text">Image</span>
            </div>
        </div>

        <div className="pb-element pb-content-element"
             draggable="true"
             id="elementContent-Button"
        >
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-modal-window icon" aria-hidden="true"></span>
                <span className="text">Button</span>
            </div>
        </div>

        <div className="pb-element pb-content-element"
             draggable="true"
             id="elementContent-Divider"
        >
            <div className="pb-element-body">
                                    <span className="glyphicon glyphicon-resize-horizontal icon"
                                          aria-hidden="true"></span>
                <span className="text">Divider</span>
            </div>
        </div>

        <div className="pb-element pb-content-element"
             draggable="true"
             id="elementContent-Social"
        >
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-bullhorn icon" aria-hidden="true"></span>
                <span className="text">Social</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-file icon" aria-hidden="true"></span>
                <span className="text">Html</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-header icon" aria-hidden="true"></span>
                <span className="text">Heading</span>
            </div>
        </div>
    </div>)
}

function ContentTabTemplates() {
    return (<div id="pb-tab-templates">
        <ol className="pb-list-element">
            <li><a className="btn btn-link" href="#">Template One</a></li>
            <li><a className="btn btn-link" href="#">Template Two</a></li>
            <li><a className="btn btn-link" href="#">Template Three</a></li>
            <li><a className="btn btn-link" href="#">Template Four</a></li>
        </ol>
    </div>)
}

/*function ContentTabBody() {
    return (<div id="pb-tab-body">
        <div className="pb-section-name">
            <h4 className="headline">General options</h4>
            <div className="pb-section-item">
                <span className="name">Adjust to width</span>
                <div className="value"></div>
            </div>
        </div>
    </div>)
}*/

export default function ToolBarTabContent(props) {
    const {activeTabContent, onDragStart, onDragEnd} = props;
    const {activeToolBarBody, handleToolBarBodyClose} = props;
    let tabContentItem;
    let ToolBarBodyBlock;
    switch (activeTabContent) {
        case 'Structure':
            tabContentItem = <ContentTabStructure
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />;
            break;
        case 'Content':
            tabContentItem = <ContentTabContent
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />;
            break;
        case 'Templates':
            tabContentItem = <ContentTabTemplates />;
            break;
        default:
            console.error(activeTabContent, 'Error');
    }
    console.log(activeToolBarBody);
    if (activeToolBarBody){
        ToolBarBodyBlock = <ToolBarBody
            handleToolBarBodyClose={handleToolBarBodyClose}
        />
    }
    return (
        <div className="tab-content">
            {tabContentItem}
            {ToolBarBodyBlock}
        </div>
    );
}