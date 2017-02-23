/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
import WorkAreaComponent from './WorkArea/WorkAreaComponent'
import ToolbarComponent from './Toolbar/ToolbarComponent'

export default function BuilderComponent() {

    return (
        <div className="">
            <WorkAreaComponent />

            <ToolbarComponent />
        </div>
    );
}