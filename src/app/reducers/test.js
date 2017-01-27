/**
 * Created by ruslan on 27.01.17.
 */

// import constants from '../constants'
import { NAME_ACTION_CONSTANT_TYPE } from '../constants/TestConstants';

    // default data state
const initialState = {
    name: 'test'
};//[]

export default function test(state = initialState, action) {

    switch (action.type) {
        // constant name
        case NAME_ACTION_CONSTANT_TYPE:
            return { ...state, name: action.payload};
        default:
            return state;
    }

}