/**
 * Created by ruslan on 01.02.17.
 */
//import React, { PropTypes, Component } from 'react';
import React, { Component } from 'react';

import ConstructorView from './ConstructorView/ConstructorViewBlockComponent';
import ToolbarBlock from './Toolbar/ToolbarBlockComponent';

export default class BuilderBlock extends Component {

    render() {
        return (
            <div className='builder-block'>
                <ConstructorView />
                <ToolbarBlock />
        </div>
        );
    }
}

/*BuilderBlock.PropTypes = {
    //name: PropTypes.string.isRequired
};*/