/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function ContentMenuComponent(props) {
    const {children} = props;
    return (
        <div className="pb-menu pb-content-menu">
            {/* panels Rows/Elements/Styles... */}
            {children}
        </div>
    );
}