/**
 * Created by ruslan on 24.01.17.
 */
import React from 'react'

import ToolBarNav from './ToolBarNav'
import ToolBarTabContent from './ToolBarTabContent'

export default function ToolBarBlock(props) {
    const {onClickNavigation, activeTabContent, onDragStart, onDragEnd} = props;
    const {activeToolBarBody, handleToolBarBodyClose} = props;
    return (
        <div className="pb-toolbar col-md-4">
            {/* Nav tabs */}
            <ToolBarNav onClickNavigation={onClickNavigation}/>

            {/* Tab panes */}
            <ToolBarTabContent
                activeTabContent={activeTabContent}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}

                activeToolBarBody={activeToolBarBody}
                handleToolBarBodyClose={handleToolBarBodyClose}
            />
        </div>
    );
}

