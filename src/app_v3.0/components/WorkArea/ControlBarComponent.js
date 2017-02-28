/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component

export default function ControlBarComponent(props) {
    const {backgroundColor, handleClickControlBar, handelBlurControlBar} = props;

    return (
        <div
            className="pb-bar pb-control-bar"
            style={{
                "backgroundColor": `#${backgroundColor}`
            }}
            onClick={handleClickControlBar}
            onContextMenu={handleClickControlBar}
            onBlur={handelBlurControlBar}
        >

        </div>
    );
}