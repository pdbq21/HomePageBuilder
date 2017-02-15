/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {
    ADD_NODE, CREATE_ID, ADD_COLUMNS_DATA, ADD_ELEMENT_TYPE, TOGGLE_BAR_MENU, REMOVE_CHILD,
    TOGGLE_BAR_MENU_BLUR, DELETE_NODE, CLICK_MOVE, ON_DRAG_ENTER_DROP_AREA, ON_DRAG_LEAVE_DROP_AREA,
    CLICK_MOVE_END, EXCHANGE_STRUCTURE_ACTIVE, EXCHANGE_NODE_PUSH, EXCHANGE_NODE_DELETE
} from '../constants/ConstructorViewConstants'
// default data state
const initialState = {
    0: {
        id: 0,
        childrenIds: [],
    },
    isActiveExchangeSection: false,
    isActiveExchangeRow: false,
    isActiveExchangeCol: false
};

function createChildrenIds(state, action) {
    //console.log(action);
    switch (action.type) {
        case ADD_NODE:
            return [...state, action.childrenId];
        case REMOVE_CHILD:
            return state.filter(id => id !== action.childId);
        default:
            return state
    }
}

const isActiveExchangeStructure = (state, action) => {
    const {isActive, structureType} = action;
    if (isActive) {
        if (structureType === 'section') {
            return {...state, isActiveExchangeSection: true}
        } else if (structureType === 'row') {
            return {...state, isActiveExchangeRow: true};
        } else if (structureType === 'col') {
            return {...state, isActiveExchangeCol: true};
        }
    } else {
        if (structureType === 'section') {
            return {...state, isActiveExchangeSection: false}
        } else if (structureType === 'row') {
            return {...state, isActiveExchangeRow: false};
        } else if (structureType === 'col') {
            return {...state, isActiveExchangeCol: false};
        }
    }
    if (action.structureType === 'data-col') {
        return {...state, isActiveDragStructure: true, columns: action.dataAttr}
    } else if (action.name === 'data-elementType') {
        return {...state, isActiveDragElement: true, elementType: action.dataAttr};
    }
};

const exchangeNode = (state, action) => {
    const {type, dragId, dropId, isFirst} = action;
    //console.log(state, dragId, dropId);
    switch (type) {
        case EXCHANGE_NODE_PUSH:

            for (let [index, id] of state.entries()){
                if (id === dropId) {
                    if (isFirst) {
                        state.splice(index, 0, dragId);
                        break;
                    } else {
                        state.splice(++index, 0, dragId);
                        break;
                    }
                }
            }
            return state;

        case EXCHANGE_NODE_DELETE:
            return state.filter(id =>
                id !== action.id
            );

        default:
            return state
    }
};

const node = (state, action) => {
    switch (action.type) {
        case CREATE_ID:
            return {
                id: action.nodeId,
                parentId: action.parentId,
                childrenIds: [],
                isActiveMenu: false,
                isActiveMove: false,
                isActiveDropArea: false,
            };
        case ADD_NODE:
        case REMOVE_CHILD:
            return Object.assign({}, state, {
                childrenIds: createChildrenIds(state.childrenIds, action)
            });
        case ADD_COLUMNS_DATA:
            return Object.assign({}, state, {
                columnsIndex: action.colIndex
            });
        case ADD_ELEMENT_TYPE:
            return Object.assign({}, state, {
                elementType: action.elementType
            });
        case TOGGLE_BAR_MENU:
            return Object.assign({}, state, {
                isActiveMenu: !state.isActiveMenu
            });
        case TOGGLE_BAR_MENU_BLUR:
            if (typeof state === 'undefined') {
                return state;
            } else {
                return Object.assign({}, state, {
                    isActiveMenu: false
                });
            }

        case CLICK_MOVE:
            return Object.assign({}, state, {
                isActiveMove: true
            });
        case CLICK_MOVE_END:
            return Object.assign({}, state, {
                isActiveMove: false
            });
        case ON_DRAG_ENTER_DROP_AREA:
            return Object.assign({}, state, {
                isActiveDropArea: true
            });

        case ON_DRAG_LEAVE_DROP_AREA:
            return Object.assign({}, state, {
                isActiveDropArea: false
            });

        case EXCHANGE_NODE_PUSH:
        case EXCHANGE_NODE_DELETE:
            return Object.assign({}, state, {
                childrenIds: exchangeNode(state.childrenIds, action)
            });

        default:
            return state
    }
};


// Todo: refactoring functions getAllDescendantIds and deleteMany
const getAllDescendantIds = (state, nodeId) => (
    state[nodeId].childrenIds.reduce((acc, childId) => (
        [...acc, childId, ...getAllDescendantIds(state, childId)]
    ), [])
);
const deleteMany = (state, ids) => {
    state = {...state};
    ids.forEach(id => delete state[id]);
    return state
};
//export default function ConstructorViewReducer(state = {}, action) {
export default function (state = initialState, action) {
    const {nodeId} = action;
//console.log(state);
    if (typeof nodeId === 'undefined') {
        return state;
    }

    if (action.type === DELETE_NODE) {
        const descendantIds = getAllDescendantIds(state, nodeId);
        return deleteMany(state, [nodeId, ...descendantIds])
    }
    if (action.type === EXCHANGE_STRUCTURE_ACTIVE) {
        return isActiveExchangeStructure(state, action);
    }

    return Object.assign({}, state, {
        [nodeId]: node(state[nodeId], action)
    })
}


/* Note
 One global object for save all sections id
 {
 data: {
 id: data,
 sectionIds: []
 }
 }

 */