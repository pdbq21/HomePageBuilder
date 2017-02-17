/**
 * Created by ruslan on 17.02.17.
 */
import {
    IS_ACTIVE_EDIT_PANEL, CHANGE_BACKGROUND_COLOR
} from '../constants/ToolbarConstants'


// Edit Panel
export function ActionIsActiveEditPanel(id, boolean) {
    return {
        type: IS_ACTIVE_EDIT_PANEL,
        id,//for this current id EditPanel is active
        boolean
    }
}
export function ActionChangeBackgroundColor(color) {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        color
    }
}