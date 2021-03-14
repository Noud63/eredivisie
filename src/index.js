import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import AllMatches from './AllMatches';
import { AllGames } from './Context';

ReactDOM.render(

  <React.StrictMode>
    <AllGames>
      <App />
    </AllGames>
  </React.StrictMode>,
  document.getElementById('root')
);

