/**
 * Created by ruslan on 17.02.17.
 */
// import constants from '../constants'
import {
    IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR, CREATE_NODE_STYLES, DELETE_NODE_STYLES,
    SELECT_EDIT_PANEL_NAVIGATION
} from '../constants/EditPanelConstants'
// default data state
const initialState = {
    isActiveEditPanel: false,
    idActiveStructure: '',
    defaultStyle: {
        backgroundColor: '#ffffff'
    },

    activeTab: 'Content', // default
    tabs: [
        {
            name: 'Content',
        },
        {
            name: 'Styles',
        },
        /*{
         name: 'Edit',
         }*/
    ],
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

const nodeStyle = (state, action) => {

    switch (action.type) {
        case CREATE_NODE_STYLES:
            return {
                id: action.nodeId,
                currentStyle: {}
            };

        case CHANGE_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                currentStyle: changeStyle(state.currentStyle, action)
            });

        default:
            return state
    }
};

const deleteNodeStyles = (state, nodeId) => {
    state = {...state};
    delete state[nodeId];
    return state;
};

// todo: create styles in object
export default function EditPanelReducer(state = initialState, action) {
    const {nodeId, type} = action;
    if (typeof nodeId === 'undefined') {
        switch (type) {

            case IS_ACTIVE_EDIT_PANEL:
                return Object.assign({}, state, {
                    isActiveEditPanel: action.boolean,
                    idActiveStructure: action.id
                });
            case SELECT_EDIT_PANEL_NAVIGATION:
                return Object.assign({}, state, {
                    activeTab: action.name
                });

            default:
                return state;
        }
    }
    else {

        if (type === DELETE_NODE_STYLES) {
            return deleteNodeStyles(state, nodeId)
        }

        return Object.assign({}, state, {
            [nodeId]: nodeStyle(state[nodeId], action)
        });
    }

}
