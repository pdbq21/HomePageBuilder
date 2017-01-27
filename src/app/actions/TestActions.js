/**
 * Created by ruslan on 27.01.17.
 */
import {
    NAME_ACTION_CONSTANT_TYPE
} from '../constants/TestConstants'

export function testActions() {

    return function (dispatch) {

        dispatch({
            type: NAME_ACTION_CONSTANT_TYPE,
            payload: 'default name'
        });
    }
}