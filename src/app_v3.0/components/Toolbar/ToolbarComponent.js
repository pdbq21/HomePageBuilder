/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
/*import MainMenuComponent from './MainMenu/MainMenuComponent'
 import ContentSourceListComponent from './MainMenu/ContentSourceListComponent'
 import ContentMenuComponent from './ContentMenu/ContentMenuComponent'
 import TabsNavigationComponent from './ContentMenu/TabsNavigationComponent'
 import RowsPanelComponent from './ContentMenu/ContentPanels/RowsPanelComponent'*/

export default function ToolbarComponent() {

    return (
        <div className="pb-toolbar col-sm-12 col-md-5 col-lg-4 col-xl-3">
            <div className="pb-menu pb-content-menu">
                <h3 className="pb-menu-caption">
                    <i className="fa fa-th pb-menu-caption-icon"/>Rows
                </h3>

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
                        <div className="pb-sketch pb-row-sketch">
                            <span className="pb-row-sketch-item"/>
                        </div>

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

            <div className="pb-menu pb-main-menu">
                <ul className="pb-main-menu-start list-unstyled">
                    <li title="Hide / Show"><button className="btn btn-transparent fa fa-angle-right" type="button"/></li>
                </ul>

                <ul className="pb-menu-items list-unstyled">
                    <li title="Elements"><i className="fa fa-puzzle-piece"/></li>
                    <li className="pb-active-menu-item" title="Rows"><i className="fa fa-th"/></li>
                    <li title="Templates"><i className="fa fa-newspaper-o"/></li>
                    <li title="Edit"><i className="fa fa-paint-brush"/></li>
                </ul>

                <ul className="pb-main-menu-end list-unstyled">
                    <li title="Preview"><button className="btn btn-transparent fa fa-eye" type="button"/></li>
                    <li title="Save"><button className="btn btn-primary fa fa-save" type="button"/></li>
                </ul>
            </div>
        </div>
    );
}