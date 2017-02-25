/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {TOGGLE_VISIBILITY_CONTENT_MENU} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isVisibleContentMenu: true
};



export default function ToolbarReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_VISIBILITY_CONTENT_MENU:
            return Object.assign({}, state, {
                isVisibleContentMenu: !state.isVisibleContentMenu
            });

        default:
            return state;
    }
}
