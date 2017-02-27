/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ColComponent(props) {
    const {children, gridIndex} = props;
    return (
        <div className={`col-${gridIndex}`}>
            {children}
        </div>
    );
}