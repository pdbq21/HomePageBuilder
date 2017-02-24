/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component

export default function ControlBarComponent(props) {
    const {backgroundColor} = props;

    return (
        <div
            className="pb-bar control-bar"
            style={{
                "backgroundColor": `#${backgroundColor}`
            }}
        >

        </div>
    );
}