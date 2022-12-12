// redux thunk 적용

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

