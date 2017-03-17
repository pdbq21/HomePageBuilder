/**
 * Created by ruslan on 31.01.17.
 */
// import constants


import {TOGGLE_VISIBILITY_CONTENT_MENU, SELECT_MENU_ITEM, ACTIVE_PREVIEW} from '../constants/ToolbarConstants'

export function ActionToggleContentMenu() {
    return {
        type: TOGGLE_VISIBILITY_CONTENT_MENU
    }
}

// Navigation menu items
export function ActionSelectMenuItem(name) {
    return {
        type: SELECT_MENU_ITEM,
        name,
    }
}

export function ActionActivePreview(bool) {
    return {
        type: ACTIVE_PREVIEW,
        bool: bool
    }
}