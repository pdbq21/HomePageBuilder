/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function StylesPanelComponent() {

    return (
        <div className="">
            <h3 className="pb-menu-caption">
                <i className="fa fa-paint-brush pb-menu-caption-icon"/>Edit
            </h3>

            <div className="pb-panel">
                <h4 className="pb-panel-caption">Favorites</h4>

                <div className="pb-panel-content">
                    <div className="pb-option">
                        <label htmlFor="jt-1" className="pb-option-name">Toggle button</label>
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-toggle-joystick">
                                <input type="checkbox" id="jt-1" className="pb-toggle-joystick-value" />
                                <label htmlFor="jt-1" className="pb-toggle-joystick-btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}