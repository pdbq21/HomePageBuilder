/**
 * Created by ruslan on 27.01.17.
 */
// lib
import { combineReducers } from 'redux';

// Reducers
import test from './test';
import Preview from './Preview';
import ToolBar from './ToolBar';

// Combine Reducers
export default combineReducers({
    test,
    Preview,
    ToolBar
})