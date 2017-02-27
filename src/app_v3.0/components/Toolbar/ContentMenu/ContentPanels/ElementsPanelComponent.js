/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function ElementsPanelComponent() {

    return (
        <div className="">
            <h3 className="pb-menu-caption">
                <i className="fa fa-puzzle-piece pb-menu-caption-icon"/>Elements
            </h3>

            <div className="pb-panel pb-collapsed-panel">
                <h4 className="pb-panel-caption">Common</h4>

                <div className="pb-panel-content row no-gutters clearfix">
                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-link pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Link</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-photo pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Image</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-header pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Heading</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-file-text pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Text</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-desktop pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Gallery</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-plus-square-o pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Button</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="pb-sketch pb-element-sketch">
                            <i className="fa fa-grav pb-element-sketch-icon"/>
                            <span className="pb-element-sketch-caption">Icons</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}