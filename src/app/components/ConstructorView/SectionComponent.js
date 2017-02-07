/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function SectionComponent(props) {
   // console.log(props);

    return (
        <div className="mdl-card pb-card pb-card--section pb-card--active mdl-shadow--2dp">
            <div className="pb-bar pb-bar--horizontal">
                <button className="mdl-button mdl-button--icon">
                    <i className="material-icons">swap_vert</i>
                </button>

                <div className="pb-bar__menu">
                    <button id="section-menu-1" className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">more_vert</i>
                    </button>

                    <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
                        for="section-menu-1"
                    >
                        <li className="mdl-menu__item">Copy</li>
                        <li className="mdl-menu__item">Paste</li>
                        <li className="mdl-menu__item" disabled>Paste as linked</li>
                        <li className="mdl-menu__item">Cut</li>
                        <li className="mdl-menu__item">Remove</li>
                    </ul>
                </div>
            </div>

            <div className="pb-background">
                {/* <!-- Drop area for the row -->*/}
                <div className="pb-area pb-area--drop pb-area--green">
                    <span className="pb-area__caption">Drop the row here!</span>
                </div>
            </div>
        </div>
    );
}