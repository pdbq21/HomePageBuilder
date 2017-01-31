/**
 * Created by ruslan on 27.01.17.
 */
import React, { PropTypes, Component } from 'react';

export default class TestComponent extends Component {

    handleTest(){
        this.props.actionTest('sdfds')
    }

    render() {
        console.log('component');
        console.log(this.props);
        const { name } = this.props;
        let template;
        if (name){
            template = `${name} !`;
        } else {
            template = 'not name';
        }
        return <div className='test-component'>
            <p>
                { template }
               <button className='btn' onClick={this.handleTest.bind(this)}>enter</button>
            </p>
        </div>
    }
}

TestComponent.PropTypes = {
    name: PropTypes.string.isRequired
};