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
    const {marginTop, marginRight, marginBottom, marginLeft} = styles.margin;
    const {paddingTop, paddingRight, paddingBottom, paddingLeft} = styles.padding;
    return (
        <div className="pb-section">
            {/* control bar */}
            {children[0]}
            <div
                className="pb-section-content"
                style={{
                    'backgroundColor': `rgba(${r},${g},${b},${a})`,
                    'position': 'relative',
                    'marginTop': `${marginTop}px`,
                    'marginRight': `${marginRight}px`,
                    'marginBottom': `${marginBottom}px`,
                    'marginLeft': `${marginLeft}px`,
                    'paddingTop': `${paddingTop}px`,
                    'paddingRight': `${paddingRight}px`,
                    'paddingBottom': `${paddingBottom}px`,
                    'paddingLeft': `${paddingLeft}px`,
                }}
            >
                {/* row / drop area */}
                {children[1]}
            </div>
        </div>
    );
}
