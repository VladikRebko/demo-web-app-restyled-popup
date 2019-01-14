import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducers from './redux/reducers/index.js';

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store=store;

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
