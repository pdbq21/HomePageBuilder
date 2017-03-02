/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function EditPanelComponent(props) {
    const {children} = props;
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

                    <div className="pb-option">
                        <div className="pb-option-value">
                            <div className="input-group">
                                <div className="input-group-addon">Link</div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="http://example.com/"/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-option">
                        <label htmlFor="js-1" className="pb-option-name">Drop down list</label>
                        <div className="pb-option-value">
                            <div className="form-group">
                                <select className="form-control" id="js-1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="pb-option">
                        <label htmlFor="jc-1" className="pb-option-name">Counter</label>
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-counter-joystick">
                                <i className="pb-counter-joystick-plus fa fa-plus"/>
                                <input type="text" id="jc-1" className="pb-counter-joystick-value form-control" value={1}/>
                                <i className="pb-counter-joystick-minus fa fa-minus"/>
                            </div>
                        </div>
                    </div>


                    <div className="pb-option">
                        <label className="pb-option-name">Background color</label>
                        <div className="pb-option-value">
														{children}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}