/**
 * Created by ruslan on 27.01.17.
 */
// lib
import { combineReducers } from 'redux';

// Reducers
//import testReducer from './testReducer';
import ConstructorViewReducer from './ConstructorViewReducer';
import ToolbarReducer from './ToolbarReducer';

// Combine Reducers
export default combineReducers({
    ConstructorViewReducer,
    ToolbarReducer
})