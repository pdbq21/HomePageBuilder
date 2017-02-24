/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'


export default function DropAreaComponent(props) {
    const {name, index} = props;
    return(
        <div className="card pb-dashed-card">
            <div className="card-block">
                <i className="fa fa-hand-paper-o"/> Drag and drop a <b>{name}-{index}</b> here to start!
            </div>
        </div>
    );
}