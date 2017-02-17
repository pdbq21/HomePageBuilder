/**
 * Created by ruslan on 31.01.17.
 */
//CONSTANTS
import {
    ON_DRAG_ENTER, ON_DROP_SECTION, ON_DRAG_OVER, ON_DRAG_LEAVE, CREATE_ID, ADD_NODE, ADD_COLUMNS_DATA,
    ADD_ELEMENT_TYPE, TOGGLE_BAR_MENU, REMOVE_CHILD, DELETE_NODE, TOGGLE_BAR_MENU_BLUR, CLICK_MOVE,
    ON_DRAG_ENTER_DROP_AREA, ON_DRAG_LEAVE_DROP_AREA, CLICK_MOVE_END, EXCHANGE_STRUCTURE_ACTIVE,
    EXCHANGE_NODE_DELETE, EXCHANGE_NODE_PUSH, ACTIVATE_EDIT_PANEL, ADD_STYLES, DEACTIVATE_EDIT_PANEL,
    DATA_EXCHANGE_STRUCTURE_ACTIVE,
} from '../constants/ConstructorViewConstants'

export function ActionOnDropSection(id, name) {
    return {
        type: ON_DROP_SECTION,
        id,
        name
    };
}
export function ActionOnDragEnter() {
    return {
        type: ON_DRAG_ENTER,
        //empty
    };
}
export function ActionOnDragOver() {
    return {
        type: ON_DRAG_OVER,
        //empty
    };
}
export function ActionOnDragLeave() {
    return {
        type: ON_DRAG_LEAVE,
        //empty
    };
}

//generate id for sections/rows/cols/elements
// Todo: this function will create array ids sections
let nextId = 0;
export function ActionCreateNode(parentId) {
    return {
        type: CREATE_ID,
        parentId,
        nodeId: `id_${nextId++}`
    };
}

export function ActionAddNode(nodeId, childrenId) {
    return {
        type: ADD_NODE,
        nodeId,
        childrenId
    };
}

export function ActionAddColumnsData(nodeId, colIndex) {
    return {
        type: ADD_COLUMNS_DATA,
        nodeId,
        colIndex
    };
}
export function ActionAddElementType(nodeId, elementType) {
    return {
        type: ADD_ELEMENT_TYPE,
        nodeId,
        elementType
    };
}

export function ActionToggleBarMenu(nodeId) {
    return {
        type: TOGGLE_BAR_MENU,
        nodeId
    };
}
export function ActionToggleBarMenuBlur(nodeId) {
    return {
        type: TOGGLE_BAR_MENU_BLUR,
        nodeId
    };
}
export function ActionRemoveChild(nodeId, childId) {
    return {
        type: REMOVE_CHILD,
        nodeId,
        childId
    };
}
export function ActionDeleteNode(nodeId) {
    return {
        type: DELETE_NODE,
        nodeId
    };
}
export function ActionMove(nodeId, structureType) {
    return {
        type: CLICK_MOVE,
        nodeId,
        structureType
    };
}
export function ActionIsActiveExchangeStructure(isActive, structureType) {
    return {
        type: EXCHANGE_STRUCTURE_ACTIVE,
        nodeId: 'data',
        isActive,
        structureType
    };
}
export function ActionDataExchangeStructure(nodeId, structureType) {
    return {
        type: DATA_EXCHANGE_STRUCTURE_ACTIVE,
        nodeId,
        structureType
    };
}
export function ActionMoveEnd(nodeId) {
    return {
        type: CLICK_MOVE_END,
        nodeId
    };
}

export function ActionDragEnterDropArea(nodeId) {
    return {
        type: ON_DRAG_ENTER_DROP_AREA,
        nodeId
    };
}

export function ActionDragLeaveDropArea(nodeId) {
    return {
        type: ON_DRAG_LEAVE_DROP_AREA,
        nodeId
    };
}

export function ActionExchangeNodeDelete(nodeId, id) {
    return {
        type: EXCHANGE_NODE_DELETE,
        nodeId,
        id
    };
}
export function ActionExchangeNodePush(nodeId, dropId, dragId, isFirst) {

    return {
        type: EXCHANGE_NODE_PUSH,
        // parent id
        nodeId,
        dropId,
        dragId,
        // if drop to first element === true, else === false
        isFirst
    };
}
export function ActionActivateEditPanel(nodeId) {
    return {
        type: ACTIVATE_EDIT_PANEL,
        nodeId
    };
}
export function ActionDeactivateEditPanel(nodeId) {
    return {
        type: DEACTIVATE_EDIT_PANEL,
        nodeId
    };
}
export function ActionAddStyles(nodeId, id) {
    return {
        type: ADD_STYLES,
        nodeId,
        id
    };
}


