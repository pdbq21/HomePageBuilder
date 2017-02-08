/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ON_DRAG_START, ON_DRAG_END, ON_CLICK_NAVIGATION} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    activeDragStructure: false,
    columns: []
};

export function ToolbarReducer(state = initialState, action) {
    switch (action.type) {
        // constant name
        case ON_DRAG_START:
            return {...state, activeDragStructure: true, columns: action.cols};
        case ON_DRAG_END:
            return {...state, activeDragStructure: false, columns: action.cols};
        default:
            return state;
    }
}
const initialStateNavigation = {
    activeTab: 'Rows', // default
    tabs: [
        {
            name: 'Rows',
        },
        {
            name: 'Elements',
        },
        {
            name: 'Templates',
        },
        {
            name: 'Edit',
        }
    ]
};

export function ToolbarNavigationReducer(state = initialStateNavigation, action) {

    switch (action.type) {
        // navigation
        case ON_CLICK_NAVIGATION:
            return {...state, activeTab: action.name};
        default:
            return state;
    }
}

