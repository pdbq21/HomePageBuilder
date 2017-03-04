/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function RowComponent(props) {
const {children, styles} = props;
    const {r, g, b, a} = styles.background.backgroundColor;
    return (
        <div className="pb-row written-row">
            {/* control bar */}
            {children[0]}
            <div
                className="pb-row-content"
                style={{'backgroundColor': `rgba(${r},${g},${b},${a})`}}
            >
                <div className="row no-gutters">
                    {/* col */}
                    {children[1]}
                </div>
            </div>
            {/* drop zone */}
            {children[2]}
        </div>
    );
}