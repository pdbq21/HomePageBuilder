/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
import MainMenuComponent from './MainMenu/MainMenuComponent'
import ContentSourceListComponent from './MainMenu/ContentSourceListComponent'
import ContentMenuComponent from './ContentMenu/ContentMenuComponent'
import TabsNavigationComponent from './ContentMenu/TabsNavigationComponent'
import RowsPanelComponent from './ContentMenu/ContentPanels/RowsPanelComponent'

export default function ToolbarComponent() {

    return (
        <div className="">

            <ContentMenuComponent>
                <TabsNavigationComponent />
                <RowsPanelComponent />
            </ContentMenuComponent>

            <MainMenuComponent>
                <ContentSourceListComponent />
            </MainMenuComponent>
        </div>
    );
}