/**
 * Created by ruslan on 31.01.17.
 */
import {
    ON_DRAG_ENTER, ON_DROP_SECTION, ON_DRAG_OVER, ON_DRAG_LEAVE, CREATE_ID, ADD_NEW_SECTION
} from '../constants/ConstructorViewConstants'

export function ActionOnDrop(event) {
    console.log('action onDrop', event);
    return{
        type: ON_DROP_SECTION,
        payload: event,
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

// generate id for sections/rows/cols/elements
let nextId = 0;
export function ActionCreateId() {
    return{
        type: CREATE_ID,
        id: `id_${nextId++}`
    };
}

export function ActionAddNewSection(id) {
    return{
        type: ADD_NEW_SECTION,
        id
    };
}


