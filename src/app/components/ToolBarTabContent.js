/**
 * Created by ruslan on 20.01.17.
 */
import React from 'react'

function ContentTabContent() {
    return (<div id="pb-tab-content">

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-font icon" aria-hidden="true"></span>
                <span className="text">Text</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-picture icon" aria-hidden="true"></span>
                <span className="text">Image</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                <span className="glyphicon glyphicon-modal-window icon" aria-hidden="true"></span>
                <span className="text">Button</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
            <div className="pb-element-body">
                                    <span className="glyphicon glyphicon-resize-horizontal icon"
                                          aria-hidden="true"></span>
                <span className="text">Divider</span>
            </div>
        </div>

        <div className="pb-element pb-content-element">
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

function ContentTabStructure() {
    return (<div id="pb-tab-structure">
        <div className="pb-element pb-structure-element">
            <span className="block block-12"></span>
        </div>

        <div className="pb-element pb-structure-element">
            <span className="block block-6"></span>
            <span className="block block-6"></span>
        </div>

        <div className="pb-element pb-structure-element">
            <span className="block block-4"></span>
            <span className="block block-8"></span>
        </div>

        <div className="pb-element pb-structure-element">
            <span className="block block-8"></span>
            <span className="block block-4"></span>
        </div>

        <div className="pb-element pb-structure-element">
            <span className="block block-4"></span>
            <span className="block block-4"></span>
            <span className="block block-4"></span>
        </div>

        <div className="pb-element pb-structure-element">
            <span className="block block-3"></span>
            <span className="block block-3"></span>
            <span className="block block-3"></span>
            <span className="block block-3"></span>
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

function ContentTabBody() {
    return (<div id="pb-tab-body">
        <div className="pb-section-name">
            <h4 className="headline">General options</h4>
            <div className="pb-section-item">
                <span className="name">Adjust to width</span>
                <div className="value"></div>
            </div>
        </div>
    </div>)
}

export default function ToolBarTabContent(props) {
    const {activeTabContent} = props;
    let tabContentItem;
    switch (activeTabContent) {
        case 'Content':
            tabContentItem = <ContentTabContent />;
            break;
        case 'Structure':
            tabContentItem = <ContentTabStructure />;
            break;
        case 'Templates':
            tabContentItem = <ContentTabTemplates />;
            break;
        case 'Body':
            tabContentItem = <ContentTabBody />;
            break;
        default:
            console.error(activeTabContent, 'Error');
    }
    return (
        <div className="tab-content">
            {tabContentItem}
        </div>
    );
}