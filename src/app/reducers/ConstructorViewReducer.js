/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import { ADD_NEW_SECTION } from '../constants/ConstructorViewConstants'
// default data state
/*const initialState = {
    id: '',
    name: 'section',
    childrenId: [],
    parentId: '',
};*/

export default function ConstructorViewReducer(state = {}, action) {
console.log('reduce action',action);
    switch (action.type) {
        // constant name
        case ADD_NEW_SECTION:
            //console.log('state:::',...state);
            return { ...state, [`key_${action.id}`]: {id: action.rowId} };

        default:
            return state;
    }

}