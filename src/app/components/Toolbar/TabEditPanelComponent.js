/**
 * Created by ruslan on 20.02.17.
 */
import React from 'react'

export function EditPanelNavigation(props) {
    const {handelEditPanelNavigation} = props;
    const {navigationTabs, activeTab} = props;
    return (
        <div className="mdl-tabs__tab-bar"
             onClick={(event) => handelEditPanelNavigation(event)}
        >
            {navigationTabs.map((tabName, index) => {
                return <span href="" className={`mdl-tabs__tab ${(activeTab === tabName.name) ? 'is-active' : ''}`}
                             key={`tab-edit-panel-key-${index}`}
                >
                    {tabName.name}
                </span>

            })}
        </div>);
}

function EditPanelContent(props) {
    return (
        <div>

        </div>
    );
}
function EditPanelStyles(props) {
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
}

export function EditPanel(props) {
    const {onChange, onChangeImage, activeTab} = props;
    return (
        (activeTab === 'Content') ?
            <EditPanelContent /> :
            <EditPanelStyles
                onChange={onChange}
                onChangeImage={onChangeImage}
            />

    );
}