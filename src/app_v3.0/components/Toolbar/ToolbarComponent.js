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
                <div className="row">
                    <div className="col">
                        <h3 className="pb-menu-caption">Rows</h3>
                    </div>
                </div>
            </div>

            <div className="pb-menu pb-main-menu">
                <ul className="pb-menu-start list-unstyled">
                    <li><button className="btn btn-transparent fa fa-angle-right" type="button"/></li>
                </ul>

                <ul className="pb-menu-items list-unstyled">
                    <li title="Elements"><i className="fa fa-puzzle-piece"/></li>
                    <li className="active" title="Rows"><i className="fa fa-tasks"/></li>
                    <li title="Templates"><i className="fa fa-newspaper-o"/></li>
                    <li title="Edit"><i className="fa fa-paint-brush"/></li>
                </ul>

                <ul className="pb-menu-end list-unstyled">
                    <li><button className="btn btn-primary fa fa-save" type="button" title="Save"/></li>
                </ul>
            </div>
        </div>
    );
}