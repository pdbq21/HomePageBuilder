/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
/*const Colors = {
=======
/*import SectionComponent from './SectionComponent'
import RowComponent from './RowComponent'
import ControlBarComponent from './ControlBarComponent'*/


export default function WorkAreaComponent(props) {
const { children, handleClickAddSection } = props;
    return (
        <div className="pb-workarea col-sm-12 col-md-7 col-lg-8 col-xl-9">
            {/* section */}
            {children}

            <button
                className="pb-add-section-button"
                onClick={handleClickAddSection}
            >
                <i className="icon-plus"/>
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