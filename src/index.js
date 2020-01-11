import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from "./Components/store/reducer";


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
  <Provider store={store}>
      <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
