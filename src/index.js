import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 
  <React.StrictMode>
     <BrowserRouter >
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();