/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
// import WorkAreaComponent from './WorkArea/WorkAreaComponent'
// import ToolbarComponent from './Toolbar/ToolbarComponent'

export default function BuilderComponent() {

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Workarea */}
                <div className="pb-workarea col-sm-12 col-md-7 col-lg-8 col-xl-9">

                </div>

                {/* Toolbar */}
                <div className="pb-toolbar col-sm-12 col-md-5 col-lg-4 col-xl-3">

                </div>
            </div>
        </div>
    );
}