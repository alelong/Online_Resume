import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, List } from './components/App';
import './index.less';
//import BackgroundImage from './components/BackgroundImage';

//ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </div>
  </Router>,
  document.getElementById('app')
)
