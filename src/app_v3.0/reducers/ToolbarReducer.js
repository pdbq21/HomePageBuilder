/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {TOGGLE_VISIBILITY_CONTENT_MENU, SELECT_MENU_ITEM, ACTIVE_PREVIEW} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isVisibleContentMenu: true,
    isActivePreview: false,
    //navigation menu-items
    activeMenuItem: 'Rows', // default
    menuItems: [
        {
            name: 'Rows',
            classIcon: 'fa-th'
        },
        {
            name: 'Elements',
            classIcon: 'fa-puzzle-piece'
        },
        {
            name: 'Edit',
            classIcon: 'fa-paint-brush'
        },
        {
            name: 'Templates',
            classIcon: 'fa-newspaper-o'
        },

    ],
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
        case ACTIVE_PREVIEW:
            return Object.assign({}, state, {
                isActivePreview: action.bool
            });

        default:
            return state;
    }
}
