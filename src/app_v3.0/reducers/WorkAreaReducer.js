/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {
    COLOR_PICKER, CREATE_ID, ADD_NODE, REMOVE_CHILD, MOVE_SECTION, GRID_INDEX
} from '../constants/WorkAreaConstants'

// default data state
const initialState = {
    id_work_area: {
        id: 'id_work_area',
        childrenIds: []
    }
};


function createChildrenIds(state, action) {
    //console.log(action);
    switch (action.type) {
        case ADD_NODE:
            return [...state, action.childrenId];
        case REMOVE_CHILD:
            //return state.filter(id => id !== action.childId);
            return state;
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
                childrenIds: []
            };

        case ADD_NODE:
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

        default:
            return state
    }
};

export function WorkAreaReducer(state = initialState, action) {
    const {nodeId} = action;

    if (typeof nodeId === 'undefined') {
        return state;
    }

    return Object.assign({}, state, {
        [nodeId]: node(state[nodeId], action)
    })
}
