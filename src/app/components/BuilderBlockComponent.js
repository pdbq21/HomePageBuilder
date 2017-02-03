/**
 * Created by ruslan on 01.02.17.
 */
import React, {PropTypes} from 'react';

//import ConstructorView from './ConstructorView/ConstructorViewBlockComponent';
//import ToolbarBlock from './Toolbar/ToolbarBlockComponent';

export default function BuilderBlock(props) {
    const children = props.children;
    //console.log(children);
    return (
        <div className='builder-block'>
            {children}
        </div>
    );
}

BuilderBlock.PropTypes = {
    children: PropTypes.element.isRequired
};