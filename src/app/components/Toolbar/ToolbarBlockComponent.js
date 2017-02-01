/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ToolbarBlock() {
    return (
        <div className="toolbar-block" >

            <div className="toolbar-block__nav">
                Navigation
            </div>
<div className="toolbar-block__tab-panel">
    <h4 className="name-block">list tabs content</h4>
    <div className="content-items type-image">
        Image
    </div>
    <div className="content-items type-text">
        Text
    </div>
    <div className="content-items type-button">
        Button
    </div>

</div>
        </div>
    );
}