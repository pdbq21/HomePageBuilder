/**
 * Created by ruslan on 27.01.17.
 */
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    console.log('store');
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store
}
