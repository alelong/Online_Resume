import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Section, Academics_Section } from './components/App';
import './index.less';
//import BackgroundImage from './components/BackgroundImage';

//ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/academics" component={Academics_Section} />
      </div>
  </Router>,
  document.getElementById('app')
)
