/**
 * Created by ruslan on 27.01.17.
 */

// import constants from '../constants'
import { NAME_ACTION_CONSTANT_TYPE, ON_CLICK } from '../constants/TestConstants';

    // default data state
const initialState = {
    name: 'test'
};//[]
console.log('reducer');
export default function test(state = initialState, action) {

    switch (action.type) {
        // constant name
        case NAME_ACTION_CONSTANT_TYPE:
            return { ...state, name: action.payload};
        case ON_CLICK:
            return { ...state, name: action.name};
        default:
            return state;
    }

}