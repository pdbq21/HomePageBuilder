/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ON_DRAG_START, ON_DRAG_END, ON_CLICK_NAVIGATION, /*ACTIVE_EDIT_PANEL,
    CHANGE_BACKGROUND_COLOR*/
} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isActiveDragStructure: false,
    isActiveDragElement: false,
    columns: [],
    elementType: '',
    //edit panel
    //isActiveEditPanel: false,
    //navigation
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
    ],

};

function ColOrElement(state, action) {
    switch (action.type) {
        // constant name
        case ON_DRAG_START:
            if (action.name === 'data-col') {
                return {...state, isActiveDragStructure: true, columns: action.dataAttr}
            } else if (action.name === 'data-elementType') {
                return {...state, isActiveDragElement: true, elementType: action.dataAttr};
            }
            break;
        case ON_DRAG_END:
            if (action.name === 'data-col') {
                return {...state, isActiveDragStructure: false, columns: []}
            } else if (action.name === 'data-elementType') {
                return {...state, isActiveDragElement: false, elementType: ''};
            }
            break;
        default:
            return state;
    }
}

/*
const changeStyle = (state, action) => {
    switch (action.type) {
        // constant name
        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                backgroundColor: action.color
            });
        default:
            return state;
    }
};*/

export default function ToolbarReducer(state = initialState, action) {
    switch (action.type) {
        // constant name
         case ON_DRAG_START:
         case ON_DRAG_END:
             return ColOrElement(state, action);

        case ON_CLICK_NAVIGATION:
            return {...state, activeTab: action.name};

        /*case ACTIVE_EDIT_PANEL:
            return {...state, isActiveEditPanel: true};
        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                currentStyle: changeStyle(state.currentStyle, action)
            });*/

        default:
            return state;
    }
}
