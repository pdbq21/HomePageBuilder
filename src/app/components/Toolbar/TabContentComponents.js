/**
 * Created by ruslan on 08.02.17.
 */
import React from 'react'

export function StructurePanel(props) {
    const {OnDragStart, OnDragEnd} = props;
    return (
        <ul className="mdl-list pb-list--panel pb-list--no-spacing"
            onDragStart={OnDragStart}
            onDragEnd={OnDragEnd}
        >
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
                data-col="12"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--12-col">12</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
                data-col="6-6"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
                data-col="4-4-4"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
                data-col="3-6-3"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
                draggable='true'
                data-col="3-3-3-3"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
        </ul>
    );
}
export function ContentPanel(props) {
    const {OnDragStart, OnDragEnd} = props;
    return (
        <div className="mdl-grid"
             onDragStart={OnDragStart}
             onDragEnd={OnDragEnd}
        >
            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand"
                         draggable='true'
                         data-elementType="Text"
                    >
                        <h2 className="mdl-card__title-text">Text</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">title</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand"
                         draggable='true'
                         data-elementType="Image"
                    >
                        <h2 className="mdl-card__title-text">Image</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">image</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand"
                         draggable='true'
                         data-elementType="Button"
                    >
                        <h2 className="mdl-card__title-text">Button</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">add_circle</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand"
                         draggable='true'
                         data-elementType="Divider"
                    >
                        <h2 className="mdl-card__title-text">Divider</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">settings_ethernet</i>
                    </div>
                </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
                <div className="mdl-card pb-card pb-card--grab mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand"
                         draggable='true'
                         data-elementType="Title"
                    >
                        <h2 className="mdl-card__title-text">Title</h2>
                        <div className="mdl-layout-spacer"></div>
                        <i className="material-icons">font_download</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function TemplatesPanel() {
    return (
        <ul>
            <li>Viserys</li>
            <li>Daenerys</li>
        </ul>
    );
}
/*
export function EditPanel(props) {
    const {onChange, onChangeImage} = props;
    return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Style</h2>
                </div>

                <div className="mdl-card__actions mdl-card--border">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <h5>Background</h5>
                        </div>

                        <div className="mdl-cell mdl-cell--6-col">
                            <label htmlFor="sample1">Image</label>
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <div className="mdl-textfield pb-field mdl-js-textfield">
                                <input className="mdl-textfield__input" type="file" id="sample1"
                                       onChange={(event) => (onChangeImage(event.target.value))}
                                />
                            </div>
                        </div>


                        <div className="mdl-cell mdl-cell--6-col">
                            <label htmlFor="sample2">Color</label>
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <div className="mdl-textfield pb-field mdl-js-textfield">
                                <input
                                    className="mdl-textfield__input"
                                    type="color"
                                    id="sample2"

                                    onChange={(event) => (onChange(event.target.value))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}*/
