/**
 * Created by ruslan on 20.01.17.
 */
import React from 'react'

export default function ToolBarNav(props) {

    return(
        <ul className="nav nav-tabs nav-justified" onClick={props.onClickNavigation}>
            <li role="presentation" className="navigation active">
                <a href="#">Structure</a>
            </li>
            <li role="presentation" className="navigation">
                <a href="#">Content</a>
            </li>

            <li role="presentation" className="navigation ">
                <a href="#">Templates</a>
            </li>
            <li role="presentation" className="navigation">
                <a href="#">Body</a>
            </li>
        </ul>
    )
}