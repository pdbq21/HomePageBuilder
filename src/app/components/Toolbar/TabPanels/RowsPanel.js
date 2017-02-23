/**
 * Created by ruslan on 22.02.17.
 */
import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const Type = {
    rightTest: 'RIGHT_TEST'
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
            name: props.name
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

class RowsPanel extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isDropped: PropTypes.bool.isRequired
    };

    render() {
        const { name, isDropped, isDragging, connectDragSource } = this.props;
        const opacity = isDragging ? 0.4 : 1;

        return connectDragSource(
            <div style={{ ...style, opacity }}>
                {isDropped ?
                    <s>{name}</s> :
                    name
                }
            </div>
        );
    }
}


export default DragSource('LEFT_TEST', rightSpec, collect)(RowsPanel);

function StructurePanel(props) {
    console.log(props);
    return (
        <ul className="mdl-list pb-list--panel pb-list--no-spacing"

        >
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"

                data-col="12"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--12-col">12</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"

                data-col="6-6"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"

                data-col="4-4-4"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                    <div className="mdl-cell mdl-cell--4-col">4</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"

                data-col="3-6-3"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--6-col">6</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
            <li className="mdl-card pb-card pb-card--grab mdl-shadow--2dp"

                data-col="3-3-3-3"
            >
                <div className="mdl-grid pb-grid--sketch">
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                    <div className="mdl-cell mdl-cell--3-col">3</div>
                </div>
            </li>
        </ul>
    );
}