/**
 * Created by ruslan on 17.02.17.
 */
import {
    IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR, CREATE_NODE_STYLES, DELETE_NODE_STYLES,
    SELECT_EDIT_PANEL_NAVIGATION
} from '../constants/EditPanelConstants'


// Edit Panel
export function ActionIsActiveEditPanel(id, name, boolean) {
    return {
        type: IS_ACTIVE_EDIT_PANEL,
        id,//for this current id EditPanel is active
        name, // Section/Row/Text/Image ...
        boolean
    }
}
export function ActionSelectEditPanelNavigation(name) {
    return {
        type: SELECT_EDIT_PANEL_NAVIGATION,
name, // Content / Styles
    }
}
export function ActionCreateNodeStyles(nodeId, structure) {
    return {
        type: CREATE_NODE_STYLES,
        nodeId,
				structure
    }
}
export function ActionDeleteNodeStyles(nodeId) {
    return {
        type: DELETE_NODE_STYLES,
        nodeId
    }
}


export function ActionChangeBackgroundColor(nodeId, color) {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        nodeId,
        color
    }
}