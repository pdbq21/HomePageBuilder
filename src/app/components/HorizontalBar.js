/**
 * Created by ruslan on 10.02.17.
 */
import React from 'react'

export default function HorizontalBar(props) {
    const {id, name, type} = props;
    return(<div className="pb-bar pb-bar--horizontal">
        <div className="pb-bar__button">
            <button className="mdl-button mdl-button--icon">
                <i className="material-icons">swap_vert</i>
            </button>
        </div>

        <div className="pb-bar__caption"><span>{name}</span></div>

        <div className="pb-bar__menu">
            <button id={`${type}-menu-${id}`} className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">more_vert</i>
            </button>

            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor={`row-menu-${id}`}>
                <li className="mdl-menu__item">Copy</li>
                <li className="mdl-menu__item">Paste</li>
                <li className="mdl-menu__item" disabled>Paste as linked</li>
                <li className="mdl-menu__item">Cut</li>
                <li className="mdl-menu__item">Remove</li>
            </ul>
        </div>
    </div>);
}