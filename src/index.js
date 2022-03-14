import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import './index.css';
// import './App.css';
import App from './App';
import Header from './components/shared/Header'
import reportWebVitals from './reportWebVitals';
import DeleteTodo from './components/DeleteTodo'

import TodoCard from './components/pages/TodoCard'
import Home from './components/pages/Home'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ReactTooltip />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
