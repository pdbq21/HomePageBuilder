/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function SectionComponent(props) {
    const { id, classNameActiveAddSection, handelDrop, handleDragOver, children, key } = props;
    //console.log('SectionComponent',props);
// todo: add drop-down menu with opening menu up or down
    return (
        <div className="mdl-card pb-card pb-card--section  mdl-shadow--2dp"
             key={`key-${key}`}
        >{/*pb-card--active*/}
            <div className="pb-bar pb-bar--horizontal">
                <button className="mdl-button mdl-button--icon">
                    <i className="material-icons">swap_vert</i>
                </button>

                <div className="pb-bar__menu">
                    <button id={`section-menu-${id}`} className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">more_vert</i>
                    </button>

                    <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
                        htmlFor={`section-menu-${id}`}
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
                {/*<!-- Row block -->*/}
                {children}
                {/* <!-- Drop area for the row -->*/}
                <div
                    className={`pb-area pb-area--drop ${classNameActiveAddSection}`}
                    onDrop={(event) => handelDrop(event, id)}
                    onDragOver={handleDragOver}
                >
                    <span className="pb-area__caption">Drop the row here!</span>
                </div>
            </div>
        </div>
    );
}