/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ADD_NEW_SECTION, CREATE_ID, ADD_SECTION} from '../constants/ConstructorViewConstants'
// default data state
const initialState = {
    0: {
        id: 0,
        rowIds: []
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
function createRowIds(state, action) {
    switch (action.type) {
        case ADD_NEW_SECTION:
            return [...state, action.rowId];
        case ADD_SECTION:
            return [...state, action.rowId];
        default:
            return state
    }
}

const nodeSection = (state, action) => {
    //console.log(action);
    switch (action.type) {
        case CREATE_ID:
            return {
                id: action.nodeId,
                rowIds: []
            };
        case ADD_NEW_SECTION:
            return Object.assign({}, state, {
                rowIds: createRowIds(state.rowIds, action)
            });
        case ADD_SECTION:
            return Object.assign({}, state, {
                rowIds: createRowIds(state.rowIds, action)
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
        [nodeId]: nodeSection(state[nodeId], action)
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