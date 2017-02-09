/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {ON_DRAG_START, ON_DRAG_END, ON_CLICK_NAVIGATION} from '../constants/ToolbarConstants'
// default data state
const initialState = {
    isActiveDragStructure: false,
    isActiveDragElement: false,
    columns: [],
    elementType: '',
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
    ]
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

export default function ToolbarReducer(state = initialState, action) {
    switch (action.type) {
        // constant name
         case ON_DRAG_START:
         case ON_DRAG_END:
             return ColOrElement(state, action);
        /*case ON_DRAG_START:
            // for tabs Rows / Elements
            /!*return (action.name === 'data-col')?
                {...state, isActiveDragStructure: true, columns: action.dataAttr} :
                {...state, isActiveDragElement: true, elementType: action.dataAttr};*!/
            return ColOrElement(state, action);
        case ON_DRAG_END:
            // for tabs Rows / Elements
            return (action.name === 'data-col')?
                {...state, isActiveDragStructure: false, columns: []} :
                {...state, isActiveDragElement: false, elementType: ''};*/
        case ON_CLICK_NAVIGATION:
            return {...state, activeTab: action.name};
        default:
            return state;
    }
}
