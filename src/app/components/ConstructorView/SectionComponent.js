/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function SectionComponent(props) {
    const {
        id, parentId, handleDragEnd, children, draggable,
        handleDragStart, classActiveEditPanel
    } = props;
// todo: add drop-down menu with opening menu up or down
    // props => draggable='true'
    return (
        <div className={`mdl-card pb-card pb-card--section  mdl-shadow--2dp ${classActiveEditPanel}`}
             draggable={draggable}
             onDragEnd={(event) => handleDragEnd(event, id)}
             onDragStart={(event) => handleDragStart(event, parentId, id)}

        >
            {/* vertical bar*/}
            {children[0]}

            <div className="pb-background">
                {/*<!-- Row block -->*/}
                {children[1]}

                {/* <!-- Drop area for the row -->*/}
                {children[2]}
                {/*<div
                    className={`pb-area pb-area--drop ${classNameActiveAddSection}`}
                    onDrop={(event) => handelDrop(event, id)}
                    onDragOver={handleDragOver}
                >
                    <span className="pb-area__caption">Drop the row here!</span>
                </div>*/}
            </div>
        </div>
    );
}