/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'

export default function DropAreaComponent(props) {
const {
    id, handelDrop, handleDragOver, classActiveDropArea, isFirst, name, parentId, hidden
} = props;

    return (<div
        style={{'display': hidden}}
        className={`pb-area pb-area--drop pb-area--drop-section ${classActiveDropArea}`}
        onDrop={(event) => handelDrop(event, id, isFirst, parentId)}
        onDragOver={handleDragOver}
    >
        <span
            className="pb-area__caption"
            style={{'pointerEvents': 'none'}}
        >
            Drop the {name} here!
        </span>
    </div>);
}