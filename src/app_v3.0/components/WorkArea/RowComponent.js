/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';

//import component


export default function RowComponent(props) {
const {children} = props;
    return (
        <div className="pb-row written-row">
            {/* control bar */}
            {children[0]}
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
    );
}