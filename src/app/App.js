/**
 * Created by ruslan on 19.01.17.
 */
// import lib
import React from 'react'

// import styles
import './styles.css'

// import Components
import ToolBarNav from './components/ToolBarNav'

/* Preview Block */

function PreviewBlock() {
    return(
        <div className="pb-canvas" id="drop_zone">

            <div className="new-content-block">
                <div className="" id="add-new-icon-plus"></div>
            </div>

        </div>
    );
}

/* end PreviewBlock*/

/* Tool Bar Block*/
function ToolBarBlock(props) {
    const { onClickNavigation } = props;
    console.log(props);
    return(
        <div className="pb-toolbar">
            {/* Nav tabs */}

            <ToolBarNav onClickNavigation={onClickNavigation}/>

            {/* Tab panes */}
            <ToolBarTabContent />

        </div>
    );
}

/* Nav Tool Bar*/
function ToolBarNavigation() {
    return(
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
                <a href="#pb-tab-content" aria-controls="pb-tab-content" role="tab" data-toggle="tab">Content</a>
            </li>
            <li role="presentation">
                <a href="#pb-tab-templates" aria-controls="pb-tab-templates" role="tab" data-toggle="tab">Templates</a>
            </li>
            <li role="presentation">
                <a href="#pb-tab-profile" aria-controls="pb-tab-profile" role="tab" data-toggle="tab">Structure</a>
            </li>
            <li role="presentation">
                <a href="#pb-tab-messages" aria-controls="pb-tab-messages" role="tab"
                   data-toggle="tab">Body</a>
            </li>
        </ul>
    );
}

/* Tab Content Tool Bar*/
function ToolBarTabContent() {
    return(
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="pb-tab-content">

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
            </div>

            <div role="tabpanel" className="tab-pane fade" id="pb-tab-templates">
                <ol className="pb-list-element">
                    <li><a className="btn btn-link" href="#">Template One</a></li>
                    <li><a className="btn btn-link" href="#">Template Two</a></li>
                    <li><a className="btn btn-link" href="#">Template Three</a></li>
                    <li><a className="btn btn-link" href="#">Template Four</a></li>
                </ol>
            </div>

            <div role="tabpanel" className="tab-pane fade" id="pb-tab-profile">
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
            </div>

            <div role="tabpanel" className="tab-pane fade" id="pb-tab-messages">
                <div className="pb-section-name">
                    <h4 className="headline">General options</h4>
                    <div className="pb-section-item">
                        <span className="name">Adjust to width</span>
                        <div className="value"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}




/* Root App Component */
export default class PageBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
        this.dragAndDrop = this.dragAndDrop.bind(this);
        this.onClickNavigation = this.onClickNavigation.bind(this);

    }



    dragAndDrop(element){

//empty
    }

    onClickNavigation(element) {
       if (element.target.parentNode.className !== 'navigation active') {
            document.querySelectorAll(".navigation.active")[0].className = 'navigation';
            element.target.parentNode.className = 'navigation active';
        }

    }

    render() {
        return (
            <div id="app-page-builder">

<PreviewBlock />

                <ToolBarBlock
                    onClickNavigation={this.onClickNavigation}
                />

            </div>
        );
    }
}

// List const name (Image/Text/button...)
