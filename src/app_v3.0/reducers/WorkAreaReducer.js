/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {COLOR_PICKER} from '../constants/WorkAreaConstants'
// default data state
const initialState = {};


export default function WorkAreaReducer(state = initialState, action) {
    switch (action.type) {
        case COLOR_PICKER:
            return state;
        default:
            return state;
    }
}
