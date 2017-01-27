/**
 * Created by ruslan on 27.01.17.
 */
import React, { PropTypes, Component } from 'react';

export default class TestComponent extends Component {

    render() {
        const { name } = this.props;
        const { actionTest } = this.props;
        let template;
        if (name){
            template = `${name} !`;
        } else {
            template = 'not name';
        }
        return <div className='test-component'>
            <p>
                { template }
               <button className='btn' onClick={actionTest}>enter</button>
            </p>
        </div>
    }
}

TestComponent.PropTypes = {
    name: PropTypes.string.isRequired
};