/**
 * Created by ruslan on 19.01.17.
 */

import React from 'react'

/* Root App Component */
export default class PageBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {

            },
        };
        this.onClickSelect = this.onClickSelect.bind(this);
    }


    onClickSelect(element) {

    }

    render() {
        return (
            <div className="">
Test
            </div>
        );
    }
}

