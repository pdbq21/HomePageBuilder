/**
 * Created by ruslan on 31.01.17.
 */
import React from 'react'

export default function ConstructorViewBlockComponent(props) {
    const { classNameAddNewSection } = props;
    return (
        <div className="constructor-view" >

            <div className={`new-section-block ${classNameAddNewSection}`}>
                Add new section
            </div>

        </div>
    );
}