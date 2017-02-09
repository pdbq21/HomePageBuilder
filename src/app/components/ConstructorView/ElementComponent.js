/**
 * Created by ruslan on 09.02.17.
 */
import React from 'react'




export default function ElementComponent(props) {

let element;
    switch (props.type) {
        case 'Text':
            element = <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s</p>;
            break;
        case 'Image':
            element = <img src="images/noimage.png" className="pb-image" alt="" />;
            break;
        case 'Button':
                element = <button className="mdl-button mdl-js-button mdl-button--raised">
                    Shop now
                </button>;
            break;
        case 'Title':
            break;
        default:
            break;
    }
    return (
        <div className="mdl-card pb-card pb-card--col mdl-shadow--2dp">

            <div className="pb-bar pb-bar--text pb-bar--vertical">
                <div className="pb-bar__button">
                    <button className="mdl-button mdl-button--icon">
                        <i className="material-icons">swap_vert</i>
                    </button>
                </div>

                <div className="pb-bar__caption"><span>{props.type}</span></div>

                <div className="pb-bar__menu">
                    <button id="col-menu-1" className="mdl-button mdl-js-button mdl-button--icon">
                        <i className="material-icons">more_vert</i>
                    </button>

                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                        htmlFor="col-menu-1">
                        <li className="mdl-menu__item">Copy</li>
                        <li className="mdl-menu__item">Paste</li>
                        <li className="mdl-menu__item" disabled>Paste as linked</li>
                        <li className="mdl-menu__item">Cut</li>
                        <li className="mdl-menu__item">Remove</li>
                    </ul>
                </div>
            </div>

            <div className="pb-background mdl-shadow--2dp">
                {element}
            </div>
        </div>
    );
}
