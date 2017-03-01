/**
 * Created by ruslan on 27.01.17.
 */
// lib
import { combineReducers } from 'redux';

// Reducers
//import testReducer from './testReducer';
import ConstructorViewReducer from './ConstructorViewReducer';
import ToolbarReducer from './ToolbarReducer';
import EditPanelReducer from './EditPanelReducer';

// Combine Reducers
export default combineReducers({
    ConstructorViewReducer,
    ToolbarReducer,
		EditPanelReducer
})