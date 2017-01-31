/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'

// default data state
const initialState = {

};

export default function toolbar(state = initialState, action) {

    switch (action.type) {
        // constant name
        case 'NAME_ACTION_CONSTANT_TYPE':
            return { ...state, name: action.payload};
        default:
            return state;
    }

}