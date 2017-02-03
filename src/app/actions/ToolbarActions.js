/**
 * Created by ruslan on 31.01.17.
 */
import {
    ON_DRAG_START, ON_DRAG_END
} from '../constants/ToolbarConstants'

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