/**
 * Created by ruslan on 13.02.17.
 */
import React from 'react'
import { DropTarget } from 'react-dnd';

const Spec = {
    drop(props, monitor, component) {
        console.log('drop',props, monitor, component, monitor.getItem());//{ name: 'test_name' };
        return {name: 'Dustbin'};
    },

    hover(){
       // console.log('hover');
    },

    /*canDrop(props, monitor){
       // console.log('canDrop');
    }*/
};

// DropTarget - collect
//
// - connect: An instance of DropTargetConnector.
// You use it to assign the drop target role to a DOM node.
//
// - monitor: An instance of DropTargetMonitor.
// You use it to connect state from the React DnD to props.
// Available functions to get state include canDrop(), isOver() and didDrop()
let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};


function DropAreaComponent(props) {
const {
    classActiveDropArea, name,  connectDropTarget,  isOver, canDrop,
} = props;

    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(<div
        style={{ 'backgroundColor': backgroundColor }}
        className={`pb-area pb-area--drop pb-area--drop-section ${classActiveDropArea}`}
    >
        <span
            className="pb-area__caption"
            style={{'pointerEvents': 'none'}}
        >
            Drop the {name} here!
        </span>
    </div>);
}

export default DropTarget('RowItem', Spec, collect)(DropAreaComponent)