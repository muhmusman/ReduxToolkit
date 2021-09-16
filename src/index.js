import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer';

// const initialState = {
//   name: "usman",
//   age: 22,
//   state: "coder"
// };

const store = configureStore({
  reducer : userReducer
  // preloadedState : initialState
})

ReactDOM.render(
  <React.StrictMode>
   <Provider store = {store}> 
      <App /> 
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
