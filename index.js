import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import {createStore} from 'redux'

const store = configureStore();

const  RNRedux = () => (
	<Provider store={store}>
        <App />
    </Provider>);


AppRegistry.registerComponent('empty-project-template', () => RNRedux);
