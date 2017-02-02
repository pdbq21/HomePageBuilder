/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import { ON_DRAG_START, ON_DRAG_END } from '../constants/ToolbarConstants'
// default data state
const initialState = {
activeDragStructure: false
};

export default function toolbar(state = initialState, action) {

    switch (action.type) {
        // constant name
        case ON_DRAG_START:
            return { ...state, activeDragStructure: true};
        case ON_DRAG_END:
            return { ...state, activeDragStructure: false};
        default:
            return state;
    }

}