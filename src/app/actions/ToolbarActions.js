/**
 * Created by ruslan on 31.01.17.
 */
import {
    ON_DRAG_START, ON_DRAG_END, ON_CLICK_NAVIGATION, ON_DROP_ROWS
} from '../constants/ToolbarConstants'


// Drag and Drop Actions
export function ActionOnDragStart(event) {
    //console.log('action onDragStart', event);
    return{
        type: ON_DRAG_START,
        payload: event,
    };
}
export function ActionOnDragEnd(event) {
    //console.log('action onDragEnd', event);
    return{
        type: ON_DRAG_END,
        payload: event,
    };
}
export function ActionOnDropRows(event) {
    //console.log('action onDragEnd', event);
    return{
        type: ON_DROP_ROWS,
        payload: event,
    };
}

// Navigation Actions
export function ActionSelectNavigation(name) {
    return {
        type: ON_CLICK_NAVIGATION,
        name,
    }
}