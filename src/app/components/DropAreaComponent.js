/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'

export default function DropAreaComponent(props) {
const {
    id, handelDrop, handleDragOver, classActiveDropArea
} = props;
    return (<div
        className={`pb-area pb-area--drop pb-area--drop-section ${(classActiveDropArea)? 'is-active-area' : ''}`}
        onDrop={(event) => handelDrop(event, id)}
        onDragOver={handleDragOver}
        /*
        onDragEnter={(event) => handleDragEnter(event, id)}
        onDragLeave={(event) => handleDragLeave(event, id)}*/
    >
        <span className="pb-area__caption">Drop the ${} here!</span>
    </div>);
}