/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {
    ADD_NODE, CREATE_ID, ADD_COLUMNS_DATA, ADD_ELEMENT_TYPE, TOGGLE_BAR_MENU, REMOVE_CHILD,
    TOGGLE_BAR_MENU_BLUR, DELETE_NODE
} from '../constants/ConstructorViewConstants'
// default data state
const initialState = {
    0: {
        id: 0,
        childrenIds: [],
    }

};

function createChildrenIds(state, action) {
    console.log(action);
    switch (action.type) {
        case ADD_NODE:
            return [...state, action.childrenId];
        case REMOVE_CHILD:
            return state.filter(id => id !== action.childId);
        default:
            return state
    }
}

const node = (state, action) => {
    switch (action.type) {
        case CREATE_ID:
            return {
                id: action.nodeId,
                parentId: action.parentId,
                childrenIds: [],
                isActiveMenu: false
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
            } else{
                return Object.assign({}, state, {
                    isActiveMenu: false
                });
            }

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