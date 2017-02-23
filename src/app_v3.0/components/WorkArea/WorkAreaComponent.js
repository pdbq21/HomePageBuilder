/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component
import SectionComponent from './SectionComponent'
import RowComponent from './RowComponent'
import ControlBarComponent from './ControlBarComponent'

export default function WorkAreaComponent() {

    return (
        <div className="">
            <SectionComponent>
                <ControlBarComponent />
                <RowComponent>
                    <ControlBarComponent />

                </RowComponent>
            </ SectionComponent>
        </div>
    );
}