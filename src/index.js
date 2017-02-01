import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App'
import Builder from './app/containers/BuilderContainer';
import configureStore from './app/store/configureStore';
// import styles
import './index.css';
import './app/styles/styles.css'

const store = configureStore();
console.log('app');

ReactDOM.render(
    <Provider store={store}>
        <div className='app'>
            <Builder />
        </div>
    </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
    <App />,
    document.getElementById('timer')
);