import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ReducerContextProvider } from './context/context';
import { makeServer } from './server';

makeServer();
ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
    <ReducerContextProvider>
    <App />
    </ReducerContextProvider>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
