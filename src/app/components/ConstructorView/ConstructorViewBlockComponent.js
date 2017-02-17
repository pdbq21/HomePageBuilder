/**
 * Created by ruslan on 31.01.17.
 */
import React from 'react'

export default function ConstructorViewBlockComponent(props) {
    const {
        handleClickAddSection, children,
        classPointerEvents
    } = props;

    return (
        <div className={`pb-workspace mdl-cell mdl-cell--8-col ${classPointerEvents}`}

            /* onDragEnd={handleDragEnd}*/
        >
            {children}
            <div className='pb-area pb-area--add'
            >
                <button
                    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                    onClick={handleClickAddSection}
                >
                    + Add section
                </button>
            </div>
        </div>
    );
}