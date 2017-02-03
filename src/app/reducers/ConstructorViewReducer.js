/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ADD_NEW_SECTION, /*CREATE_ID*/} from '../constants/ConstructorViewConstants'
// default data state
/*
 const initialState = {
 id: '',
 name: 'section',
 childrenId: [],
 parentId: '',
 };*/

/*
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

const nodeSection = (state, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_NEW_SECTION:
            return {
                id: action.id,
                rowIds: action.rowIds
            };
        default:
            return state
    }
};

export default function ConstructorViewReducer(state = {}, action) {

    /*const {nodeId} = action;
     if (nodeId === 'undefined') {
     return state;
     }*/

    switch (action.type) {
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
    }

    /*return {
     ...state, [nodeId]: nodeSection(state[nodeId], action)
     }*/
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