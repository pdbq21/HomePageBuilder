/**
 * Created by ruslan on 27.01.17.
 */
import {
    NAME_ACTION_CONSTANT_TYPE, ON_CLICK
} from '../constants/TestConstants'

export function testActions(payload) {
return{
    type: NAME_ACTION_CONSTANT_TYPE,
    payload
}


}

export function ActionsOnClick(name) {
console.log('action', name);
        return{
            type: ON_CLICK,
            name,
        };

}

/*export function testActions(searchType, title) {
    return {
        type: types.LOAD_SEARCH_LAYOUT,
        searchType,
        title
    };
}*/

// Example actions
let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

//Todo: in State 'id' each element is - example => .0.0.1.2