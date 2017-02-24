/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
// import WorkAreaComponent from './WorkArea/WorkAreaComponent'
// import ToolbarComponent from './Toolbar/ToolbarComponent'

export default function BuilderComponent() {

    return (
        <div className="pb-main-box container-fluid">
            <div className="row">
                {/* Workarea */}
                <div className="pb-workarea col-sm-12 col-md-7 col-lg-8 col-xl-9">
                    {/* Empty section */}
                    <div className="pb-section">
                        <div
                            className="pb-bar control-bar"
                            style={{
                                "backgroundColor": "#00acc1"
                            }}
                        ></div>
                        <div className="pb-section-content">
                            <div className="pb-row written-row">
                                <div
                                    className="pb-bar control-bar"
                                    style={{
                                        "backgroundColor": "yellow"
                                    }}
                                ></div>
                                <div className="pb-row-content">
                                    <div className="row">
                                        <div className="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda consectetur cumque doloribus dolorum ducimus eveniet facere iusto labore laborum libero, modi natus optio pariatur quae suscipit tempore voluptatum.</div>
                                        <div className="col">23</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-section">
                        <div
                            className="pb-bar control-bar"
                            style={{
                                "backgroundColor": "#00acc1"
                            }}
                        ></div>
                        <div className="pb-section-content">
                            <div className="card dashed-card">
                                <div className="card-block">
                                    <i className="fa fa-hand-paper-o"></i> Drag and drop a <b>row</b> here to start!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="pb-toolbar col-sm-12 col-md-5 col-lg-4 col-xl-3">
                    <div className="pb-menu pb-content-menu">
                        1
                    </div>

                    <div className="pb-menu pb-main-menu">
                        <p>2</p>

                        <ul className="pb-menu-items list-unstyled">
                            <li><i className="fa fa-puzzle-piece"></i></li>
                            <li><i className="fa fa-paint-brush"></i></li>
                            <li><i className="fa fa-tasks"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}