import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render((
  <Router>
    <App/>
  </Router>
  ),
  document.getElementById('app')
)
