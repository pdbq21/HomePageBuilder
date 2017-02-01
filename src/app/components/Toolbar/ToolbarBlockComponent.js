/**
 * Created by ruslan on 01.02.17.
 */
import React, { PropTypes } from 'react'

export default function ToolbarBlockComponent(props) {
    const children = props.children;
    //console.log(children);
    return (
        <div className="toolbar-block">
            {children}
        </div>
    );
}
ToolbarBlockComponent.PropTypes = {
    children: PropTypes.element.isRequired
};