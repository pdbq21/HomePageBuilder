/**
 * Created by morienter on 20.02.17.
 */
import React from 'react'

export default function EditPanelSection(props) {
    const {activeTab} = props;
    return (
        (activeTab === 'Content') ?
            // Content
            <div>
section
            </div> :
            // Styles
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}