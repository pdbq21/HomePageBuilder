/**
 * Created by ruslan on 28.02.17.
 */
import React from 'react'

export default function ContextMenuComponent(props) {
    const {display, top, left, refContextMenu} = props;
    return (
        <div>
            <ul
                className="pb-context-menu"
                style={{
										'display': display,
										'top': top,
										'left': left
								}}
                ref={refContextMenu}
                tabIndex={0}
            >
                <li  className="pb-context-menu-btn">Remove</li>
                <li className="pb-context-menu-btn">Copy</li>
                <li className="pb-context-menu-btn">Paste</li>
            </ul>
        </div>
    );
}

