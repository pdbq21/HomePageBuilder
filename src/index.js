import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import App from './app/App'
//import Builder from './app/containers/BuilderContainer';
//import configureStore from './app/store/configureStore';
// import styles
//app 3.0
import BuilderComponent from './app_v3.0/components/BuilderComponent'
import './app_v3.0/styles/bootstrap/bootstrap-reboot.css';
import './app_v3.0/styles/bootstrap/bootstrap-grid.css';
import './app_v3.0/styles/bootstrap/bootstrap.css';
import './app_v3.0/styles/base.css';
import './app_v3.0/styles/theme.css';
import './app_v3.0/styles/module.css';
import './app_v3.0/styles/layout.css';
import './app_v3.0/styles/state.css';
import './app_v3.0/styles/index.css';
// styles web kit
/*
import './styles/material.css'
import './styles/pb.css'
import './styles/main.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <Builder />
    </Provider>,
  document.getElementById('root-app-pb')
);*/

ReactDOM.render(
    <BuilderComponent />,
    document.getElementById('root-app-pb')
);