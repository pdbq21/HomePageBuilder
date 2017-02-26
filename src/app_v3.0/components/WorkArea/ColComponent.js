/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ColComponent(props) {
    const {children} = props;
    return (
        <div className="col">
            {children}
        </div>
    );
}