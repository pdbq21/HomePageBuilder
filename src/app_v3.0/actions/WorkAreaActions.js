/**
 * Created by ruslan on 23.02.17.
 */

import {
    COLOR_PICKER, CREATE_ID, ADD_NODE, MOVE_SECTION, GRID_INDEX, EXCHANGE_NODE_ADD,
    EXCHANGE_NODE_REMOVE, MOVE_CHANGE_SECTION, REMOVE_CHILD, MOVE_ROW, IS_OPACITY,
    ACTIVE_CONTEXT_MENU, DELETE_NODE, ELEMENT_TYPE, ACTIVATE_EDIT_PANEL, DEACTIVATE_EDIT_PANEL,
    ACTIVE_TEXT_EDIT, ADD_IMAGE_LINK, CHANGE_TEXT_EDITOR
} from '../constants/WorkAreaConstants'

// color data base
const colors = ['EC644B',
    'D24D57',
    'F22613',
    'D91E18',
    '96281B',
    'EF4836',
    'D64541',
    'C0392B',
    'CF000F',
    'E74C3C',
    'DB0A5B',
    'F64747',
    'D2527F',
    'F62459',
    'E26A6A',
    '663399',
    '674172',
    '913D88',
    '9A12B3',
    'BF55EC',
    '8E44AD',
    '9B59B6',
    '446CB3',
    '4183D7',
    '59ABE3',
    '52B3D9',
    '22A7F0',
    '3498DB',
    '2C3E50',
    '19B5FE',
    '336E7B',
    '22313F',
    '1E8BC3',
    '3A539B',
    '34495E',
    '67809F',
    '2574A9',
    '1F3A93',
    '4B77BE',
    '5C97BF',
    '4ECDC4',
    '87D37C',
    '26A65B',
    '03C9A9',
    '68C3A3',
    '65C6BB',
    '1BBC9B',
    '1BA39C',
    '66CC99',
    '36D7B7',
    '2ECC71',
    '16A085',
    '3FC380',
    '019875',
    '03A678',
    '4DAF7C',
    '2ABB9B',
    '00B16A',
    '1E824C',
    '049372',
    '26C281',
    'F7CA18',
    'F4D03F',
    'F89406',
    'EB9532',
    'E87E04',
    'F4B350',
    'F2784B',
    'EB974E',
    'F5AB35',
    'D35400',
    'F39C12',
    'F9690E',
    'F9BF3B',
    'F27935',
    'E67E22',
    '6C7A89',
];
function getRandomInt(min, max) {
    // max = Colors.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ActionColorPicker(nodeId) {
    // min === 0 / max === Colors.length
    return {
        type: COLOR_PICKER,
        nodeId: nodeId,
        color: colors[getRandomInt(0, colors.length)]
    }
}

// create id for Section/Row/Element
let nextId = 0;
export function ActionCreateNode(parentId) {
    return {
        type: CREATE_ID,
        parentId,
        nodeId: `id_${nextId++}`
    };
}

// push new child in parent data / children: [...]
export function ActionAddNode(nodeId, childrenId, dropId) {
    return {
        type: ADD_NODE,
        nodeId,
        childrenId,
        dropId
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
export function ActionGridIndex(nodeId, gridIndex) {
    return {
        type: GRID_INDEX,
        nodeId,
        gridIndex
    };
}
export function ActionElementType(nodeId, elementType) {
    return {
        type: ELEMENT_TYPE,
        nodeId,
        elementType
    };
}

export function ActionMoveSection(nodeId, dragIndex, hoverIndex) {
    return {
        type: MOVE_SECTION,
        nodeId,
        dragIndex,
        hoverIndex
    };
}
export function ActionMoveRow(nodeId, dragIndex, hoverIndex) {
    return {
        type: MOVE_ROW,
        nodeId,
        dragIndex,
        hoverIndex
    };
}
export function ActionMoveChangeSection(nodeId, dragId, dragIndex, hoverIndex) {
    return {
        type: MOVE_CHANGE_SECTION,
        nodeId,
        dragId,
        dragIndex,
        hoverIndex
    };
}
export function ActionExchangeNodeRemove(nodeId, dragId) {
    return {
        type: EXCHANGE_NODE_REMOVE,
        nodeId,
        dragId
    };
}
export function ActionExchangeNodeAdd(nodeId, dropId) {
    return {
        type: EXCHANGE_NODE_ADD,
        nodeId,
        dropId
    };
}
export function ActionActiveOpacity(id) {
    return {
        type: IS_OPACITY,
        id
    };
}
export function ActionActiveContextMenu(id, parentId, top, left) {
    return {
        type: ACTIVE_CONTEXT_MENU,
        id,
        parentId,
        top,
        left
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
export function ActionActiveTextEdit(bool) {
    return {
        type: ACTIVE_TEXT_EDIT,
        bool
    };
}

export function ActionAddImageLink(nodeId, link) {
    return {
        type: ADD_IMAGE_LINK,
        nodeId,
        link
    };
}
export function ActionChangeTextEditor(nodeId, text) {
    return {
        type: CHANGE_TEXT_EDITOR,
        nodeId,
        text
    };
}
/*
 export function ActionBlurContextMenu(id) {
 return {
 type: BLUR_CONTEXT_MENU,
 id
 };
 }*/

