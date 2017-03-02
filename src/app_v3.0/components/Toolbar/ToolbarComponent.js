/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function ToolbarComponent(props) {
const {children} = props;
    return (
        <div className="pb-toolbar col-auto">
            {/* content menu */}
            {children[0]}
            {/* main menu */}
            {children[1]}
        </div>
    );
}