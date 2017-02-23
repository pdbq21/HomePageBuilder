/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
// import WorkAreaComponent from './WorkArea/WorkAreaComponent'
// import ToolbarComponent from './Toolbar/ToolbarComponent'


export default function BuilderComponent(props) {

const {children} = props;
    return (
        <div className="pb-main-box container-fluid">
            <div className="row">

                {/* Workarea */}

                {/* Toolbar */}
                {children}
            </div>
        </div>

    );
}