/**
 * Created by ruslan on 01.02.17.
 */
import React from 'react'

export default function ToolbarNavigationComponent(props) {
    const {onClickNavigation} = props;
    const {navigationTabs, activeTab} = props;
   // console.log('ToolbarNavigationComponent props: ', props);
    return (
        <div className="mdl-tabs__tab-bar"
             onClick={ onClickNavigation }
        >
            {navigationTabs.map((tabName, index) => {
                return <span href="" className={`mdl-tabs__tab ${(activeTab === tabName.name) ? 'is-active' : ''}`}
                   key={`tab_key_${index}`}
                >
                    {tabName.name}
                </span>

            })}
        </div>);
}

/*ToolbarNavigationComponent.PropTypes = {
 props: PropTypes.element.isRequired
 };*/
// Todo: onClick={() => doSomethingWith(item.name, index)
/*
 <Item
 key={item.key}
 onClick={() => doSomethingWith(item.name, index)}
 />*/
