import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reduxStore } from 'config/reduxStore';
import allReducers from 'config/allReducers';

import App from './App';
reduxStore.store = createStore(allReducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={reduxStore.store}>
    <App />
  </Provider>,
  rootElement);
