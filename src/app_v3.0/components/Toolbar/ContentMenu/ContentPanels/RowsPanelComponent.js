/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component




export default function RowsPanelComponent(props) {
const {connectDragSource} = props;

    return (
        <div className="">
            <p className="pb-menu-description lead">Blocks that help you to build section structure</p>

            <div className="pb-panel">
                <h4 className="pb-panel-caption">Favorites</h4>

                <div className="pb-panel-content">
                    <div className="pb-option">
                        <span className="pb-option-name">Show the button</span>
                        <div className="pb-option-value">
                            <div className="pb-joystick pb-toggle-joystick">
                                On / Off
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-panel pb-collapsed-panel">
                <h4 className="pb-panel-caption">Common</h4>

                <div className="pb-panel-content">
                    {connectDragSource(<div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                    </div>)}

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </div>

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </div>

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </div>

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </div>
                </div>
            </div>

            <div className="pb-panel pb-collapsed-panel active">
                <h4 className="pb-panel-caption">Rare</h4>

                <div className="pb-panel-content">
                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-6"/>
                        <span className="pb-row-sketch-item grow-3"/>
                    </div>

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item grow-6"/>
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-3"/>
                    </div>

                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-6"/>
                    </div>
                </div>
            </div>

            <div className="pb-panel pb-collapsed-panel active">
                <h4 className="pb-panel-caption">Flex</h4>
                <span className="pb-panel-annotation">Allow you to add columns dynamically</span>

                <div className="pb-panel-content">
                    <div className="pb-sketch pb-row-sketch">
                        <span className="pb-row-sketch-item"/>
                    </div>
                </div>
            </div>
        </div>
    );
}