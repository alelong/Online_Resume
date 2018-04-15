import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Work_Section from './components/Work.jsx';
import Skills_Section from './components/Skills.jsx';
import Education_Section from './components/Education.jsx';
import Organizations_Section from './components/Organizations.jsx';
import Leisure_Section from './components/Leisure.jsx';

import './index.less';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work_Section} />
        <Route path="/skills" component={Skills_Section} />
        <Route path="/education" component={Education_Section} />
        <Route path="/organizations" component={Organizations_Section} />
        <Route path="/leisure" component={Leisure_Section} />
      </div>
  </Router>,
  document.getElementById('app')
)
