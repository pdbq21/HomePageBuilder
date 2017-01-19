/**
 * Created by ruslan on 19.01.17.
 */

import React from 'react'
import Dragula from 'react-dragula'



/* Root App Component */
export default class PageBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {

            },
        };
        this.dragulaDecorator = this.dragulaDecorator.bind(this);
    }

    dragulaDecorator(componentBackingInstance){
        console.log(componentBackingInstance);
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    }
    render() {
        return (
            <div id="app-page-builder" >

                        <div className="pb-canvas">

                        </div>

    <div className="pb-toolbar">
        {/* Nav tabs */}
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
                <a href="#pb-tab-messages" aria-controls="pb-tab-messages" role="tab" data-toggle="tab">Body</a>
            </li>
        </ul>

        {/* Tab panes */}
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="pb-tab-content" ref={this.dragulaDecorator}>

                <div className="pb-element pb-content-element" >
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
                        <span className="glyphicon glyphicon-resize-horizontal icon" aria-hidden="true"></span>
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

                <div class="pb-element pb-structure-element">
                    <span className="block block-4"></span>
                    <span className="block block-4"></span>
                    <span className="block block-4"></span>
                </div>

                <div class="pb-element pb-structure-element">
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
    </div>




            </div>
        );
    }
}
