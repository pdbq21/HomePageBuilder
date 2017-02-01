/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ToolbarTabContentComponent(props) {
    //console.log(props);
    return (<div className="toolbar-block__tab-panel">
        <h4 className="name-block">list tabs content</h4>
        <div className="content-items type-image"
             draggable='true'
        >
            Image
        </div>
        <div className="content-items type-text"
             draggable='true'
        >
            Text
        </div>
        <div className="content-items type-button"
             draggable='true'
        >
            Button
        </div>

    </div>);
}