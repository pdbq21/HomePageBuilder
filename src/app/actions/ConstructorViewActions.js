/**
 * Created by ruslan on 31.01.17.
 */
//CONSTANTS
import {
    ON_DRAG_ENTER, ON_DROP_SECTION, ON_DRAG_OVER, ON_DRAG_LEAVE, CREATE_ID, ADD_NODE, ADD_COLUMNS_DATA
} from '../constants/ConstructorViewConstants'

export function ActionOnDropSection(id, name) {
    return{
        type: ON_DROP_SECTION,
        id,
        name
    };
}
export function ActionOnDragEnter() {
    return{
        type: ON_DRAG_ENTER,
        //empty
    };
}
export function ActionOnDragOver() {
    return{
        type: ON_DRAG_OVER,
        //empty
    };
}
export function ActionOnDragLeave() {
    return{
        type: ON_DRAG_LEAVE,
        //empty
    };
}

//generate id for sections/rows/cols/elements
// Todo: this function will create array ids sections
let nextId = 0;
export function ActionCreateId() {
    return{
        type: CREATE_ID,
        nodeId: `id_${nextId++}`
    };
}

export function ActionAddNode(nodeId, childrenId) {
    return{
        type: ADD_NODE,
        nodeId,
        childrenId
    };
}

export function ActionAddColumnsData(nodeId, colIndex) {
    return{
        type: ADD_COLUMNS_DATA,
        nodeId,
        colIndex
    };
}

