/**
 * Created by ruslan on 27.01.17.
 */
// lib
import { combineReducers } from 'redux';

// Reducers
import {WorkAreaReducer} from './WorkAreaReducer';
import ToolbarReducer from './ToolbarReducer';
import EditPanelReducer from './EditPanelReducer';

// Combine Reducers
export default combineReducers({
		WorkAreaReducer,
    ToolbarReducer,
		EditPanelReducer
})
/*
const reducers = combineReducers({
    greeting: greetingReducer,
    name: nameReducer
})*/