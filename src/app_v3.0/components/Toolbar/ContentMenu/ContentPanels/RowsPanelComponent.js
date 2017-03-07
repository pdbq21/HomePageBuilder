/**
 * Created by ruslan on 23.02.17.
 */
// import lib
import React from 'react';
import {DragSource} from 'react-dnd'
//import component

function RowItem(props) {
    const {children, connectDragSource} = props;
    return connectDragSource(
        <div className="pb-sketch pb-row-sketch">
            {children}
        </div>
    );
}

const RowItemDrag = DragSource('DROP_ROW', {
    beginDrag(props) {
        return {
            gridType: props.gridType
        };
    },

    endDrag() {
    }
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(RowItem);

export default function RowsPanelComponent() {
//const {connectDragSource} = props;

    return (
        <div className="">

            <h3 className="pb-menu-caption">
                <i className="fa fa-th pb-menu-caption-icon"/>Rows
            </h3>

            <p className="pb-menu-description lead">Blocks that help you to build section structure</p>

            <div className="pb-panel pb-collapsed-panel">
                <h4 className="pb-panel-caption">Common</h4>

                <div className="pb-panel-content">
                    <RowItemDrag
                    gridType="12"
                    >
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>

                    <RowItemDrag
                    gridType="6-6"
                    >
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>
                    <RowItemDrag
                    gridType="4-4-4"
                    >
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>

                    <RowItemDrag
                    gridType="3-3-3-3"
                    >
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>

                    <RowItemDrag
                    gridType="2-2-2-2-2-2"
                    >
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>
                </div>
            </div>

            <div className="pb-panel pb-collapsed-panel active">
                <h4 className="pb-panel-caption">Rare</h4>

                <div className="pb-panel-content">
                    <RowItemDrag
                        gridType="3-6-3"
                    >
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-6"/>
                        <span className="pb-row-sketch-item grow-3"/>
                    </RowItemDrag>

                    <RowItemDrag
                    gridType="6-3-3"
                    >
                        <span className="pb-row-sketch-item grow-6"/>
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-3"/>
                    </RowItemDrag>

                    <RowItemDrag
                    gridType="3-3-6"
                    >
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-3"/>
                        <span className="pb-row-sketch-item grow-6"/>
                    </RowItemDrag>

                    <RowItemDrag
                        gridType="5-5-2"
                    >
                        <span className="pb-row-sketch-item grow-5"/>
                        <span className="pb-row-sketch-item grow-5"/>
                        <span className="pb-row-sketch-item grow-2"/>
                    </RowItemDrag>

                    <RowItemDrag
                        gridType="2-5-5"
                    >
                        <span className="pb-row-sketch-item grow-2"/>
                        <span className="pb-row-sketch-item grow-5"/>
                        <span className="pb-row-sketch-item grow-5"/>
                    </RowItemDrag>

                    <RowItemDrag
                        gridType="4-8"
                    >
                        <span className="pb-row-sketch-item grow-4"/>
                        <span className="pb-row-sketch-item grow-8"/>
                    </RowItemDrag>

                    <RowItemDrag
                        gridType="8-4"
                    >
                        <span className="pb-row-sketch-item grow-8"/>
                        <span className="pb-row-sketch-item grow-4"/>
                    </RowItemDrag>
                </div>
            </div>

            <div className="pb-panel pb-collapsed-panel active">
                <h4 className="pb-panel-caption">Flex</h4>
                <span className="pb-panel-annotation">Allow you to add columns dynamically</span>

                <div className="pb-panel-content">
                    <RowItemDrag
                    gridType="flex"
                    >
                        <span className="pb-row-sketch-item"/>
                    </RowItemDrag>
                </div>
            </div>
        </div>
    );
}



