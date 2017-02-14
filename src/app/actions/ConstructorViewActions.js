/**
 * Created by ruslan on 31.01.17.
 */
//CONSTANTS
import {
    ON_DRAG_ENTER, ON_DROP_SECTION, ON_DRAG_OVER, ON_DRAG_LEAVE, CREATE_ID, ADD_NODE, ADD_COLUMNS_DATA, ADD_ELEMENT_TYPE,
    TOGGLE_BAR_MENU, REMOVE_CHILD, DELETE_NODE, TOGGLE_BAR_MENU_BLUR, CLICK_MOVE, ON_DRAG_ENTER_DROP_AREA,
    ON_DRAG_LEAVE_DROP_AREA, CLICK_MOVE_END, EXCHANGE_NODE
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
export function ActionCreateNode(parentId) {
    return{
        type: CREATE_ID,
        parentId,
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
export function ActionAddElementType(nodeId, elementType) {
    return{
        type: ADD_ELEMENT_TYPE,
        nodeId,
        elementType
    };
}

export function ActionToggleBarMenu(nodeId) {
    return{
        type: TOGGLE_BAR_MENU,
        nodeId
    };
}
export function ActionToggleBarMenuBlur(nodeId) {
    return{
        type: TOGGLE_BAR_MENU_BLUR,
        nodeId
    };
}
export function ActionRemoveChild(nodeId, childId) {
    return{
        type: REMOVE_CHILD,
        nodeId,
        childId
    };
}
export function ActionDeleteNode(nodeId) {
    return{
        type: DELETE_NODE,
        nodeId
    };
}
export function ActionMove(nodeId) {
    return{
        type: CLICK_MOVE,
        nodeId
    };
}
export function ActionMoveEnd(nodeId) {
    return{
        type: CLICK_MOVE_END,
        nodeId
    };
}

export function ActionDragEnterDropArea(nodeId) {
    return{
        type: ON_DRAG_ENTER_DROP_AREA,
        nodeId
    };
}

export function ActionDragLeaveDropArea(nodeId) {
    return{
        type: ON_DRAG_LEAVE_DROP_AREA,
        nodeId
    };
}

export function ActionExchangeNode(nodeId, dragId, dropId, first) {
    return{
        type: EXCHANGE_NODE,
        nodeId,
        dragId,
        dropId,
        first
    };
}

