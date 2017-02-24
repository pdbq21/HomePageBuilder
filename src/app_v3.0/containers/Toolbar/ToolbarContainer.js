/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
import ToolbarComponent from '../../components/Toolbar/ToolbarComponent'
//import container
import ContentMenuContainer from './ContentMenuContainer'
import MainMenuContainer from './MainMenuContainer'

export default function ToolbarContainer() {

    return (
            <ToolbarComponent>
								<ContentMenuContainer />

								<MainMenuContainer />
            </ToolbarComponent>
    );
}