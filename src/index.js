import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { AllData } from './Context';
import Stand from './Stand';
import Uitslagen from './Uitslagen';


ReactDOM.render(
  <React.StrictMode>
    <AllData>
      <App />
    </AllData>
  </React.StrictMode>,
  document.getElementById('root')
);

