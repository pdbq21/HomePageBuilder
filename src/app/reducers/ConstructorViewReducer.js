/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ADD_NODE, CREATE_ID, ADD_COLUMNS_DATA} from '../constants/ConstructorViewConstants'
// default data state
const initialState = {
    0: {
        id: 0,
        childrenIds: [],
    }

};

/*CREATE_ID
 {
 data:
 }
 */
/*
 const rowIds = (state, action) => {
 switch (action.type) {
 case ADD_CHILD:
 return [ ...state, action.rowIds ];
 case REMOVE_CHILD:
 return state.filter(id => id !== action.childId)
 default:
 return state
 }
 }*/
/*
 const rowIds = (state, action) => {
 switch (action.type) {
 case ADD_NEW_SECTION:
 return [...state, action.childId]
 default:
 return state
 }
 }*/
function createChildrenIds(state, action) {
    switch (action.type) {
        case ADD_NODE:
            return [...state, action.childrenId];
        default:
            return state
    }
}

const node = (state, action) => {
    switch (action.type) {
        case CREATE_ID:
            return {
                id: action.nodeId,
                childrenIds: []
            };
        case ADD_NODE:
            return Object.assign({}, state, {
                childrenIds: createChildrenIds(state.childrenIds, action)
            });
        case ADD_COLUMNS_DATA:
            return Object.assign({}, state, {
                columnsIndex: action.columns
            });

        default:
            return state
    }
};

//export default function ConstructorViewReducer(state = {}, action) {
export default function (state = initialState, action) {
    const { nodeId } = action;

    if (typeof nodeId === 'undefined') {
        return state;
    }
    /* switch (action.type) {
     // constant name
     case ADD_NEW_SECTION:
     // Example:
     // '1486135135272': {
     //   id: 1486135135272,
     //   rowIds: 1486135135272
     // },
     return {...state, [action.id]: nodeSection(state[action.id], action)};

     default:
     return state;
     }*/
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