/**
 * Created by ruslan on 10.03.17.
 */
/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component

export default function MarginPaddingComponent(props) {
    const {onClick, onChange, value, name} = props;
    return (
            <div >
                <label className="pb-option-name">{name}</label>
                <button
                    type="button"
                    data-counter="-"
                    onClick={onClick}
                >-</button>
                <input
                    style={{
                        'width': '3em'
                    }}
                    type="number"
                    value={value}
                    onChange={onChange}
                />
                <button
                    data-counter="+"
                    type="button"
                    onClick={onClick}
                >+</button>
        </div>
    );

}