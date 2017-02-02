/**
 * Created by ruslan on 31.01.17.
 */
import {
    ON_DRAG_ENTER, ON_DROP, ON_DRAG_OVER, ON_DRAG_LEAVE
} from '../constants/ConstructorViewConstants'

export function ActionOnDrop(event) {
    console.log('action onDrop', event);
    return{
        type: ON_DROP,
        event,
    };
}
export function ActionOnDragEnter() {
    return{
        type: ON_DRAG_ENTER,
        //empty
    };
}
export function ActionOnDragOver() {
    return{
        type: ON_DRAG_OVER,
        //empty
    };
}
export function ActionOnDragLeave() {
    return{
        type: ON_DRAG_LEAVE,
        //empty
    };
}