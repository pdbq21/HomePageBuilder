/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'


export default function ToolbarTabContentComponent(props) {
    const { children } = props;
    return (<div className="toolbar-block__tab-panel"

    >
        <div className="mdl-tabs__panel is-active">
            {children}
        </div>
    </div>);
}
