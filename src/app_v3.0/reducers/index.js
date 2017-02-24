/**
 * Created by ruslan on 27.01.17.
 */
// lib
import { combineReducers } from 'redux';

// Reducers
import {WorkAreaReducer} from './WorkAreaReducer';
import ToolbarReducer from './ToolbarReducer';

// Combine Reducers
export default combineReducers({
		WorkAreaReducer,
    ToolbarReducer
})
/*
const reducers = combineReducers({
    greeting: greetingReducer,
    name: nameReducer
})*/