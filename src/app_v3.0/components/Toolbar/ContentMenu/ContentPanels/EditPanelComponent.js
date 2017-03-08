/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export function EditPanelComponent(props) {
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
                                <input type="checkbox" id="jt-1" className="pb-toggle-joystick-value"/>
                                <label htmlFor="jt-1" className="pb-toggle-joystick-btn"/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-option">
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-input-joystick">
                                <label className="pb-label w-100">
                                    {/* Require "value" attribute to work correctly with CSS */}
                                    <input type="text" className="pb-label-value form-control"/>
                                    <span className="pb-label-name">Link</span>
                                </label>
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
                                <input type="text"
                                       id="jc-1"
                                       className="pb-counter-joystick-value form-control"
                                    // this is error.
                                    /*value={1}*/
                                />
                                <i className="pb-counter-joystick-minus fa fa-minus"/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-option">
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-textarea-joystick">
                                <label htmlFor="jta-1" className="pb-textarea-joystick-label">Text content</label>
                                <textarea className="form-control pb-textarea-joystick-value" id="jta-1"/>
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

export function ImageEditPanelComponent(props) {
    const {onClickLink, onChangeLink} = props;
    return (
        <div className="">
            <h3 className="pb-menu-caption">
                <i className="fa fa-paint-brush pb-menu-caption-icon"/>Edit
            </h3>
            <div className="pb-panel">
                <div className="pb-panel-content">
                    <div className="pb-option">
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-input-joystick">
                                <label className="pb-label w-100">
                                    {/* Require "value" attribute to work correctly with CSS */}
                                    <input
                                        type="text"
                                        className="pb-label-value form-control"
                                        onChange={onChangeLink}
                                    />
                                    <span className="pb-label-name">Link</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={onClickLink} type="button">Enter</button>
                    </div>
                </div>
            </div>
        </div>
    );

}