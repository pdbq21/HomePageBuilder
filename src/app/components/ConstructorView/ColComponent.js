/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ColComponent(props) {
    const {classNameActiveAddElement, col} = props;
    const { id, handelDrop, handleDragOver, children } = props;
    return (
    <div className={`mdl-cell--${col}-col`}>
        {/** mdl-cell--4-col => `mdl-cell--${this.props.colIndex}-col` */}

        {/* this.props.children Elements*/}
        {children}
        {/* this block is in all col */}
        <div className={`pb-area pb-area--drop ${classNameActiveAddElement}`}
             onDrop={(event) => handelDrop(event, id)}
             onDragOver={handleDragOver}
        >
            <span className="pb-area__caption">Drop the element here!</span>
        </div>
    </div>
    );
}