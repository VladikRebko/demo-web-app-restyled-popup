import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './components/grid/LeadsData.js';



function reducer(state = [...data], action) {
  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
