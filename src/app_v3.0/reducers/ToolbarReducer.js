/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {TOGGLE_VISIBILITY_CONTENT_MENU, SELECT_MENU_ITEM} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isVisibleContentMenu: true,
    //navigation menu-items
    activeMenuItem: 'Rows', // default
   /* menuItems: [
        {
            name: 'Rows',
        },
        {
            name: 'Elements',
        },
        {
            name: 'Edit',
        },
        {
            name: 'Templates',
        },

    ],*/
};



export default function ToolbarReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_VISIBILITY_CONTENT_MENU:
            return Object.assign({}, state, {
                isVisibleContentMenu: !state.isVisibleContentMenu
            });
        case SELECT_MENU_ITEM:
            return Object.assign({}, state, {
                activeMenuItem: action.name
            });

        default:
            return state;
    }
}
