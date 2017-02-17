/**
 * Created by ruslan on 01.02.17.
 */

import React from 'react'

export default function RowComponent(props) {
    //todo: add id
    const {
        children, draggable, handleDragEnd, handleDragStart, parentId, id, classActiveEditPanel, styles
    } = props;
    const {backgroundColor} = styles;
    //console.log('RowComponent',props);
// todo: add drop-down menu with opening menu up or down
    return (
        /*<!-- Row block -->*/
        <div className={`mdl-card pb-card pb-card--row mdl-shadow--2dp ${classActiveEditPanel}`}
             draggable={draggable}
             onDragEnd={(event) => handleDragEnd(event, id)}
             onDragStart={(event) => handleDragStart(event, parentId, id)}

             style={
                 {
                     'backgroundColor': backgroundColor
                 }
             }
        >
          {/*  <!-- .. bar -->*/}
            {/* horizontal bar component*/}
            {children[0]}

           {/* <!-- .. block background -->*/}
            <div className="pb-background mdl-grid">
                {/* columns component */}
                {children[1]}
            </div>
        </div>
    );
}