/**
 * Created by morienter on 20.02.17.
 */
import React from 'react'

export default  function EditPanelButton(props) {
    const {activeTab} = props;
    return (
        (activeTab === 'Content') ?
            <div className="mdl-grid pb-form pb-form--full-width">
                <div className="mdl-cell mdl-cell--12-col">
                    <input className="pb-field pb-field--input" type="text" placeholder="Text"/>
                </div>

                <div className="mdl-cell mdl-cell--12-col">
                    <input className="pb-field pb-field--input" type="text" placeholder="Url"/>
                </div>

                <div className="mdl-cell mdl-cell--8-col">
                    <label className="pb-label" htmlFor="button-type">Link type</label>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <select name="pb-field pb-field--select" id="button-type">
                        <option value="page">Open web page</option>
                        <option value="email">Send email</option>
                        <option value="call">Make call</option>
                        <option value="sms">Send SMS</option>
                    </select>
                </div>

                <div className="mdl-cell mdl-cell--8-col">
                    <label className="pb-label" htmlFor="button-type">Open in new window</label>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <input type="checkbox" id="" className="pb-field pb-field--checkbox" checked/>
                </div>
            </div> :
            <div className="mdl-grid pb-form--full-width">
                <div className="mdl-cell mdl-cell--8-col">
                    <label className="pb-label" htmlFor="button-color">Text Color</label>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <input className="pb-field pb-field--text" type="text" id="button-color" placeholder="#F1F1F1"/>
                </div>

                <div className="mdl-cell mdl-cell--8-col">
                    <label className="pb-label" htmlFor="button-bg-color">Background Color</label>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <input className="pb-field pb-field--text" type="text" id="button-bg-color" placeholder="#F1F1F1"/>
                </div>

                <div className="mdl-cell mdl-cell--8-col">
                    <label className="pb-label" htmlFor="button-bg-image">Background Image</label>
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    <input className="pb-field pb-field--file" type="file" id="button-bg-image"/>
                </div>
            </div>
    );
}