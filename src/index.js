import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { AllGames } from './Context';
import { Standings } from './Standings'


ReactDOM.render(

  <React.StrictMode>
    <Standings>
      <AllGames>
        <App />
      </AllGames>
    </Standings>

  </React.StrictMode>,
  document.getElementById('root')
);

