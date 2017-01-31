import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import App from './app/App';
//import App from './app/App'
import App from './app/containers/TestContainer';
import configureStore from './app/store/configureStore';


import './index.css';
const store = configureStore();
console.log('app');

ReactDOM.render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
  document.getElementById('root')
);
