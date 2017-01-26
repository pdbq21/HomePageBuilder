/**
 * Created by ruslan on 26.01.17.
 */
import React from 'react'

export default function ToolBarBody(props) {
    return(
        <div className="tab-toolbar-body">
            <h3>Body</h3>
            <button className="toolbar-body-close"
                    onClick={props.handleToolBarBodyClose}
            >
                Close
            </button>
            <hr/>
            <div className="">
                tools list
            </div>
        </div>
    )
}