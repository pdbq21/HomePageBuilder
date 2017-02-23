/**
 * Created by ruslan on 22.02.17.
 */
import React, {Component} from 'react';
import {DragSource} from 'react-dnd';

const ItemTypes = {
    RowItem: 'RowItem'
};
// Drag'nDrop spec
//
// - Required: beginDrag(props, monitor, component)
// - Optional: endDrag
// - Optional: canDrag
// - Optional: isDragging
const rightSpec = {
    beginDrag(props) {
        console.log('beginDrag');
        return {

        };
    },
    endDrag() {
        console.log('endDrag');
    }
};

// Snack DragSource collect collecting function.
// - connect: An instance of DragSourceConnector.
// You use it to assign the drag source role to a DOM node.
//
// - monitor: An instance of DragSourceMonitor.
// You use it to connect state from the React DnD to your component’s properties.
// Available functions to get state include canDrag(), isDragging(), getItemType(),
// getItem(), didDrop() etc.
let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};


function StructurePanel(props) {
    const { name, connectDragSource } = props;
    return (connectDragSource(
        <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"
            data-col={name}
        >
            <div className="mdl-grid pb-grid--sketch">
                <div className="mdl-cell mdl-cell--12-col">{name}</div>
            </div>
        </li>
        )
    );
}
let StructurePanelTest = DragSource('RowItem', rightSpec, collect)(StructurePanel);

export default class RowsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {name: '12', type: ItemTypes.RowItem},
                {name: '6-6', type: ItemTypes.RowItem},
                {name: '4-4-4', type: ItemTypes.RowItem},
                {name: '3-6-3', type: ItemTypes.RowItem},
            ]
        };
    }

    render() {

        return (
            <ul className="mdl-list pb-list--panel pb-list--no-spacing"

            >
                {this.state.rows.map(({name, type}, index) =>
                    <StructurePanelTest
                        name={name}
                        type={type}
                        key={`key-row-${index}`}
                    />
                )}
            </ul>
        );
    }
}





