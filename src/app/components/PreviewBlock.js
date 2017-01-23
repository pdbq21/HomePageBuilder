/**
 * Created by ruslan on 20.01.17.
 */
import React from 'react'

export default function PreviewBlock(props) {

    const {handelDragEnter, handleDrop, handleDragOver, handleDragLeave, testComponent} = props;
    return (
        <div className="pb-canvas col-md-8" id="drop_zone" >
            {testComponent}
            <div className="new-content-block"
                 onDragEnter={handelDragEnter}
                 onDrop={handleDrop}
                 onDragOver={handleDragOver}
                 onDragLeave={handleDragLeave}
            >
                <div className="" id="add-new-icon-plus"></div>
            </div>

        </div>
    );
}