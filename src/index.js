import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import App from './app/App'
import Builder from './app/containers/BuilderContainer';
import configureStore from './app/store/configureStore';
// import styles
import './index.css';
//import './app/styles/styles.css'
// styles web kit
import './webStarterKit/styles/pb.css'
import './webStarterKit/styles/main.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <Builder />
    </Provider>,
  document.getElementById('root')
);
/*
ReactDOM.render(
    <App />,
    document.getElementById('timer')
);*/