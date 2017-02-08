/**
 * Created by ruslan on 01.02.17.
 */

import React from 'react'

export default function RowComponent(props) {
    //todo: add id
    //const { id } = props;
    //console.log('RowComponent',props);
// todo: add drop-down menu with opening menu up or down
    return (
        /*<!-- Row block -->*/
        <div className="mdl-card pb-card pb-card--row mdl-shadow--2dp">
          {/*  <!-- .. bar -->*/}
            <div className="pb-bar pb-bar--vertical">
                <div className="pb-bar__button">
                    <button className="mdl-button mdl-button--icon">
                        <i className="material-icons">swap_vert</i>
                    </button>
                </div>

                <div className="pb-bar__caption"><span>Row</span></div>

                <div className="pb-bar__menu">
                    <button id="row-menu-1" className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">more_vert</i>
                    </button>

                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="row-menu-1">
                        <li className="mdl-menu__item">Copy</li>
                        <li className="mdl-menu__item">Paste</li>
                        <li className="mdl-menu__item" disabled>Paste as linked</li>
                        <li className="mdl-menu__item">Cut</li>
                        <li className="mdl-menu__item">Remove</li>
                    </ul>
                </div>
            </div>

           {/* <!-- .. block background -->*/}
            <div className="pb-background mdl-grid">
                {props.children}
            </div>
        </div>
    );
}