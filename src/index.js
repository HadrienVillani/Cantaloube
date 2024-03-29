import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './reset.css';
import Routes from './Pages/Routes';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ReactDOM.render(

//     <React.StrictMode>
//       <Routes />
//     </React.StrictMode>,

//   document.getElementById('root')
// );
