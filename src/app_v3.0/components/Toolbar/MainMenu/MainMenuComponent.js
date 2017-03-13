/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function MainMenuComponent(props) {
    const {handleToggleContentMenu, handelNavigationItems, children, handelPreview} = props;
    return (
        <div className="pb-menu pb-main-menu">
            <ul className="pb-main-menu-start list-unstyled">
                <li title="Hide / Show">
                    <button
                        className="btn btn-transparent fa fa-angle-right"
                        type="button"
                        onClick={handleToggleContentMenu}
                    />
                </li>
            </ul>

            <ul
                className="pb-menu-items list-unstyled"
                onClick={handelNavigationItems}
            >
                {/* navigation items */}
                {children}
            </ul>

            <ul className="pb-main-menu-end list-unstyled">
                <li title="Preview">
                    <button
                        className="btn btn-transparent fa fa-eye"
                        type="button"
                        onClick={handelPreview}
                    />
                </li>
                <li title="Save">
                    <button className="btn btn-primary fa fa-save" type="button"/>
                </li>
            </ul>
        </div>
    );
}
/*
<li className="pb-active-menu-item" title="Rows">
    <i className="fa fa-th"
       style={{'pointerEvents': 'none'}}
    />
</li>
<li className="" title="Elements">
		<i className="fa fa-puzzle-piece"
style={{'pointerEvents': 'none'}}
/>
</li>
<li className="" title="Edit">
		<i className="fa fa-paint-brush"
style={{'pointerEvents': 'none'}}
/>
</li>
<li className="" title="Templates">
		<i className="fa fa-newspaper-o"
style={{'pointerEvents': 'none'}}
/>
</li>
*/