/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {
    COLOR_PICKER, CREATE_ID, ADD_NODE, REMOVE_CHILD, MOVE_SECTION, GRID_INDEX, EXCHANGE_NODE_REMOVE,
    EXCHANGE_NODE_ADD, MOVE_CHANGE_SECTION, MOVE_ROW, IS_OPACITY, ACTIVE_CONTEXT_MENU,
    DELETE_NODE, ELEMENT_TYPE
} from '../constants/WorkAreaConstants'

// default data state
const initialState = {
    id_work_area: {
        id: 'id_work_area',
        childrenIds: []
    },
    opacityId: '',
    activeContextMenu: {
        id: '',
        top: 0
    }

};


function createChildrenIds(state, action) {
    //console.log(action);
    switch (action.type) {
        case ADD_NODE:
            //
            if (typeof action.dropId === 'undefined') {
                return [...state, action.childrenId];
            } else {
                for (let [index, id] of state.entries()) {
                    if (id === action.dropId) {
                        state.splice(++index, 0, action.childrenId);
                        break;
                    }
                }
                return state;
            }

        case REMOVE_CHILD:
            return state.filter(id => id !== action.childId);
        //return state;
        default:
            return state
    }
}

const exchangeNode = (state, action) => {
    const {type, dragId, dropId} = action;
    //console.log(state, dragId, dropId);
    switch (type) {
        case EXCHANGE_NODE_ADD:
            return [...state, dropId];

        case EXCHANGE_NODE_REMOVE:
            return state.filter(id =>
                id !== dragId
            );
        case MOVE_CHANGE_SECTION:
            // dragId, dragIndex, hoverIndex
            state.splice(action.hoverIndex, 0, action.dragId);
            return state;
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
                opacity: 1
            };

        case ADD_NODE:
        case REMOVE_CHILD:
            return Object.assign({}, state, {
                childrenIds: createChildrenIds(state.childrenIds, action)
            });
        case COLOR_PICKER:
            return Object.assign({}, state, {
                colorControlBar: action.color
            });
        case GRID_INDEX:
            return Object.assign({}, state, {
                gridIndex: action.gridIndex
            });
        case ELEMENT_TYPE:
            return Object.assign({}, state, {
								elementType: action.elementType
            });
        case MOVE_SECTION:
// todo: refactoring this
            const dragId = state.childrenIds[action.dragIndex];
            const temp = state.childrenIds[action.hoverIndex];
            let newCard = state.childrenIds;
            newCard[action.hoverIndex] = dragId;
            newCard[action.dragIndex] = temp;

            return Object.assign({}, state, {
                childrenIds: newCard
            });

        case MOVE_ROW:
            const dragRowId = state.childrenIds[action.dragIndex];
            const hoverRowId = state.childrenIds[action.hoverIndex];
            let newChildrenIds = state.childrenIds;
            newChildrenIds[action.hoverIndex] = dragRowId;
            newChildrenIds[action.dragIndex] = hoverRowId;

            return Object.assign({}, state, {
                childrenIds: newChildrenIds
            });

        case MOVE_CHANGE_SECTION:
            return Object.assign({}, state, {
                childrenIds: exchangeNode(state.childrenIds, action)
            });

        case EXCHANGE_NODE_ADD:
        case EXCHANGE_NODE_REMOVE:
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
export function WorkAreaReducer(state = initialState, action) {
    const {nodeId} = action;

    if (typeof nodeId === 'undefined') {
        switch (action.type) {
            case IS_OPACITY:
                return Object.assign({}, state, {
                    opacityId: action.id
                });
            case ACTIVE_CONTEXT_MENU:
                return Object.assign({}, state, {
                    activeContextMenu: {
                        id: action.id,
                        top: action.top
                    }
                });


            default:
                return state
        }
    }
    if (action.type === DELETE_NODE) {
        const descendantIds = getAllDescendantIds(state, nodeId);
        return deleteMany(state, [nodeId, ...descendantIds])
    }

    return Object.assign({}, state, {
        [nodeId]: node(state[nodeId], action)
    })
}
