/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
/*import SectionComponent from './SectionComponent'
import RowComponent from './RowComponent'
import ControlBarComponent from './ControlBarComponent'*/

export default function WorkAreaComponent() {

    return (
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
                                <div className="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ab ad assumenda consectetur cumque doloribus dolorum ducimus eveniet facere
                                    iusto labore laborum libero, modi natus optio pariatur quae suscipit tempore
                                    voluptatum.
                                </div>
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
            <button className="pb-add-section-button">
                <em className="icon-plus"></em>
            </button>

        </div>
    );
}