/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function SectionComponent(props) {
const {children} = props;
    return (
        <div className="">
            {children}
        </div>
    );
}