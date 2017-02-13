/**
 * Created by ruslan on 10.02.17.
 */
import React from 'react'

export default function VerticalBar(props) {
    const {id, type, handelClickBarMenu, classActiveMenu, handelClickRemove,
        handelBlurBarMenu, positionMenu} = props;
    return (<div className={`pb-bar pb-bar--${(positionMenu)? 'horizontal' : 'vertical'}`}>
        <div className="pb-bar__button">
            <button className="mdl-button mdl-button--icon">
                <i className="material-icons">swap_vert</i>
            </button>
        </div>

        {(positionMenu)? <div className="pb-bar__caption"><span>{props.name}</span></div> : ''}


        <div className="pb-bar__menu">
            <button
                id={`${type}-menu-${id}`}
                className="mdl-button mdl-js-button mdl-button--icon"
                onClick={() => handelClickBarMenu(id)}
                onBlur={() => handelBlurBarMenu(id)}
            >
                <i className="material-icons">more_vert</i>
            </button>
            <div className={`pb-bar--vertical-menu ${classActiveMenu}`}>
                <ul className=""

                >
                    <li
                        className=""
                        onClick={() => handelClickRemove(id)}

                    >
                        Remove
                    </li>
                </ul>
            </div>

        </div>
    </div>);
}