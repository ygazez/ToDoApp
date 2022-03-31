import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer,{initialState } from'./context/reducer';
import {TodoLayer} from'./context/TodoContext';
ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
    <App />
    </TodoLayer>
    
  </React.StrictMode>,
  document.getElementById('root')
);

