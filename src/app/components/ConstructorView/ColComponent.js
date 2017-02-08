/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ColComponent(props) {
    return (
    <div className="mdl-cell mdl-cell--4-col">
        {/** mdl-cell--4-col => `mdl-cell--${this.props.colIndex}-col` */}

        {/* this.props.children Elements*/}

        {/* this block is in all col */}
        <div className="pb-area pb-area--drop pb-area--gray">
            <span className="pb-area__caption">Drop the element here!</span>
        </div>
    </div>
    );
}