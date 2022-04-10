import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import HelloWorld from './modules/HelloWorld/App';
import TickClock from './modules/TickClock/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <TickClock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
