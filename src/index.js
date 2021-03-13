import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import AllMatches from './AllMatches';
// import { AllMatches } from './AllMatches';

ReactDOM.render(

  <React.StrictMode>
    {/* <AllMatches> */}
    <App />
    {/* </AllMatches> */}
  </React.StrictMode>,
  document.getElementById('root')
);

