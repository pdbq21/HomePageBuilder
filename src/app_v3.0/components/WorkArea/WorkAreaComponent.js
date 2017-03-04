/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component

/*import SectionComponent from './SectionComponent'
 import RowComponent from './RowComponent'
 import ControlBarComponent from './ControlBarComponent'*/


export default function WorkAreaComponent(props) {
    const {children, handleClickAddSection} = props;
    return (
        <div className="pb-workarea col">
            {/* section */}
            {children[0]}
            {/* context menu */}
            {children[1]}
            <button
                className="pb-add-section-button"
                onClick={handleClickAddSection}
            >
                <i className="pb-icon-plus"/>
            </button>
        </div>
    );
}

/*            {Object.keys(Colors).map((name) => (
 <SectionComponent
 color={Colors[name]}
 name={name}
 />
 ))}*/