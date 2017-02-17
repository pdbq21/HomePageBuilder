/**
 * Created by ruslan on 17.02.17.
 */
// import constants from '../constants'
import {IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR
} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isActiveEditPanel: false,
    idActiveStructure: '',
    currentStyle: {
        backgroundColor: '#ffffff'
    }
};




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
};

// todo: create styles in object
export default function EditPanelReducer(state = initialState, action) {
    switch (action.type) {

        case IS_ACTIVE_EDIT_PANEL:
            return Object.assign({}, state, {
                isActiveEditPanel: action.boolean,
                idActiveStructure: action.id
            });
        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                currentStyle: changeStyle(state.currentStyle, action)
            });


        default:
            return state;
    }
}
