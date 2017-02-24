/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function MainMenuComponent(props) {
    //const {children} = props;
    return (
        <div className="pb-menu pb-main-menu">
            <ul className="pb-main-menu-start list-unstyled">
                <li title="Hide / Show"><button className="btn btn-transparent fa fa-angle-right" type="button"/></li>
            </ul>

            <ul className="pb-menu-items list-unstyled">
                <li title="Elements"><i className="fa fa-puzzle-piece"/></li>
                <li className="pb-active-menu-item" title="Rows"><i className="fa fa-th"/></li>
                <li title="Templates"><i className="fa fa-newspaper-o"/></li>
                <li title="Edit"><i className="fa fa-paint-brush"/></li>
            </ul>

            <ul className="pb-main-menu-end list-unstyled">
                <li title="Preview"><button className="btn btn-transparent fa fa-eye" type="button"/></li>
                <li title="Save"><button className="btn btn-primary fa fa-save" type="button"/></li>
            </ul>
        </div>
    );
}