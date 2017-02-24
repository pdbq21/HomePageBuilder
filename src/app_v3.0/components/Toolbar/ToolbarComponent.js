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
    );
}