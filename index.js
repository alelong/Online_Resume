import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Title, List } from './components/App';
import './index.less';
//import BackgroundImage from './components/BackgroundImage';

//ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Title} />
        <Route path="/list" component={List} />
      </div>
  </Router>,
  document.getElementById('app')
)
