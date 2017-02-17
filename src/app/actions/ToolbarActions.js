/**
 * Created by ruslan on 31.01.17.
 */
import {
    ON_DRAG_START, ON_DRAG_END, ON_CLICK_NAVIGATION, /*ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR*/
} from '../constants/ToolbarConstants'


// Drag and Drop Actions
export function ActionOnDragStart(dataAttr, name) {
    // dataAttr => data-col='['6', '6']'... OR data-elementType='Image'...
    // name => data-col / OR data-elementType
    return{
        type: ON_DRAG_START,
        dataAttr,
        name
    };
}
export function ActionOnDragEnd(name) {
    // name => data-col / OR data-elementType
    return{
        type: ON_DRAG_END,
        name
    };
}

// Navigation Actions
export function ActionSelectNavigation(name) {
    return {
        type: ON_CLICK_NAVIGATION,
        name,
    }
}
/*
// Edit Panel
export function ActionEditPanel() {
    return {
        type: ACTIVE_EDIT_PANEL,
    }
}
export function ActionChangeBackgroundColor(color) {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        color
    }
}*/