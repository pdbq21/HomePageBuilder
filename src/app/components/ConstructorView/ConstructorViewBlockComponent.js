/**
 * Created by ruslan on 31.01.17.
 */
import React from 'react'

export default function ConstructorViewBlockComponent(props) {
    const {handleClickAddSection, children} = props;
    return (
        <div className="pb-workspace mdl-cell mdl-cell--8-col">
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
            {children}
            <div className='pb-area pb-area--add'
            >
                <button
                    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                    onClick={handleClickAddSection}
                >
                    + Add section
                </button>
            </div>
        </div>
    );
}


/*
<div className="pb-workspace mdl-cell mdl-cell--8-col">
    <div className="mdl-card pb-card pb-card--section pb-card--active mdl-shadow--2dp">
        <div className="pb-bar pb-bar--horizontal">
            <button className="mdl-button mdl-button--icon">
                <i className="material-icons">swap_vert</i>
            </button>

            <div className="pb-bar__menu">
                <button id="section-menu-1" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">more_vert</i>
                </button>

                <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect" for="section-menu-1">
                    <li className="mdl-menu__item">Copy</li>
                    <li className="mdl-menu__item">Paste</li>
                    <li className="mdl-menu__item" disabled>Paste as linked</li>
                    <li className="mdl-menu__item">Cut</li>
                    <li className="mdl-menu__item">Remove</li>
                </ul>
            </div>
        </div>

        <div className="pb-background">

            <div className="mdl-card pb-card pb-card--row mdl-shadow--2dp">

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

                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="row-menu-1">
                            <li className="mdl-menu__item">Copy</li>
                            <li className="mdl-menu__item">Paste</li>
                            <li className="mdl-menu__item" disabled>Paste as linked</li>
                            <li className="mdl-menu__item">Cut</li>
                            <li className="mdl-menu__item">Remove</li>
                        </ul>
                    </div>
                </div>

                <div className="pb-background mdl-grid">
                    <div className="mdl-cell mdl-cell--4-col">

                    </div>

                    <div className="mdl-cell mdl-cell--4-col">

                    </div>

                    <div className="mdl-cell mdl-cell--4-col">
                        /!*                                    <!--<div class="pb-area pb-area&#45;&#45;drop pb-area&#45;&#45;green">-->
                         <!--<span class="pb-area__caption">Drop the element here!</span>-->
                         <!--</div>-->*!/
                    </div>
                </div>
            </div>

            /!* <!-- Drop area for the row -->*!/
            <div className="pb-area pb-area--drop pb-area--green">
                <span className="pb-area__caption">Drop the row here!</span>
            </div>
        </div>
    </div>
    {this.props.children}
    /!*<div className={`new-section-block ${classNameAddNewSection} pb-area pb-area--add`}*!/
    <div className={`pb-area pb-area--add ${classNameAddNewSection}`}
         onDrop={this.handelDrop}
         onDragOver={this.handleDragOver}
         onDragLeave={this.handleDragLeave}
    >
        <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            + Add section
        </button>
    </div>

</div>*/
