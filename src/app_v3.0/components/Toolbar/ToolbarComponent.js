/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function ToolbarComponent(props) {
const {children} = props;
    return (
        <div className="pb-toolbar col-sm-12 col-md-5 col-lg-4 col-xl-3">
            {/* content menu */}
            {children[0]}
            {/* main menu */}
            {children[1]}
        </div>
    );
}