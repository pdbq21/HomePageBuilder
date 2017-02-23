/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'

export default function DropAreaComponent(props) {
const {
    classActiveDropArea, name, hidden
} = props;

    return (<div
        style={{'display': hidden}}
        className={`pb-area pb-area--drop pb-area--drop-section ${classActiveDropArea}`}
    >
        <span
            className="pb-area__caption"
            style={{'pointerEvents': 'none'}}
        >
            Drop the {name} here!
        </span>
    </div>);
}