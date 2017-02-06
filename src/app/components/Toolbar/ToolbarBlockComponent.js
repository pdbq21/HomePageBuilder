/**
 * Created by ruslan on 01.02.17.
 */
import React, { PropTypes } from 'react'

export default function ToolbarBlockComponent(props) {
    const children = props.children;
    //console.log(children);
    return (
        <div className="pb-toolbox mdl-cell mdl-cell--4-col">
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">

                {children}

            </div>
        </div>
    );
}

ToolbarBlockComponent.PropTypes = {
    children: PropTypes.element.isRequired
};

/*<div className="toolbar-block">
    {children}
</div>*/