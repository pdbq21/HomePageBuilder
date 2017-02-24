/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'


export default function DropAreaComponent(props) {
    const {name} = props;
    return(
        <div className="card dashed-card">
            <div className="card-block">
                <i className="fa fa-hand-paper-o"></i>  <b>{name}</b> here to start!
            </div>
        </div>
    );
}