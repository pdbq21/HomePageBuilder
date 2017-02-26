/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'


export default function DropAreaComponent(props) {

    const {name, canDrop, isOver,connectDropTarget} = props;
    const isActive = canDrop && isOver;
    let style;

    if (isActive) {
        style = {'backgroundColor': '#77d777'};
    } else if (canDrop) {
        style = {'backgroundColor': '#90ff90'};
    }
    return connectDropTarget(
        <div className="card pb-dashed-card"
        style={style}>
            <div className="card-block">
                <i className="fa fa-hand-paper-o"/> Drag and drop a <b>{name}</b> here to start!
            </div>
        </div>
    );
}