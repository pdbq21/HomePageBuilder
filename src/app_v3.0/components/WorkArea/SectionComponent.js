/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function SectionComponent(props) {
const {color, name} = props;
    return (
        <div className="pb-section">
            <div
                className="pb-bar control-bar"
                style={{
                    "backgroundColor": color
                }}
            >
            </div>
            <div className="pb-section-content">
                <div className="card dashed-card">
                    <div className="card-block">
                        <i className="fa fa-hand-paper-o"></i>  <b>{name}</b> here to start!
                    </div>
                </div>
            </div>
        </div>
    );
}