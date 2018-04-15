import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>Agathe Lelong</h1>
          <Link to="/academics"><button>Go to Academics</button></Link></div>        
    )
  }
};

class Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="nav">
      	<ul>
        	<li>Welcome to my {this.props.name} section</li>
        	<li>Static list item, common to all sections</li>
      	</ul>
      	<Link to="/"><button>Back Home</button></Link>
      </div>
    )
  }
};

class Academics_Section extends Component {
  constructor(props){
   super(props);
  }
  render () {
    return (
      <div className="nav">
        <Section name="Academics" />
      </div>
    )
  }
};

module.exports = {
  Home,
  Section,
  Academics_Section
};
