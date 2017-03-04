/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function SectionComponent(props) {
    const {children, styles} = props;
    //'background': `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
    const {r, g, b, a} = styles.background.backgroundColor;
    return (
        <div className="pb-section">
            {/* control bar */}
            {children[0]}
            <div
                className="pb-section-content"
                style={{'backgroundColor': `rgba(${r},${g},${b},${a})`, 'position': 'relative'}}
            >
                {/* row / drop area */}
                {children[1]}
            </div>
        </div>
    );
}

/*
 <div className="pb-section">
 <div
 className="pb-bar control-bar"
 style={{
 "backgroundColor": "#00acc1"
 }}
 ></div>
 <div className="pb-section-content">
 <div className="pb-row written-row">
 <div
 className="pb-bar control-bar"
 style={{
 "backgroundColor": "yellow"
 }}
 ></div>
 <div className="pb-row-content">
 <div className="row">
 <div className="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Ab ad assumenda consectetur cumque doloribus dolorum ducimus eveniet facere
 iusto labore laborum libero, modi natus optio pariatur quae suscipit tempore
 voluptatum.
 </div>
 <div className="col">23</div>
 </div>
 </div>
 </div>
 </div>
 </div>*/

