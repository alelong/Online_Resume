import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module from './SectionTextModule.jsx';

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>This is Agathe.</h1>
          <Link to="/work"><button>Work Experience</button></Link>
          <Link to="/skills"><button>Skills</button></Link>
          <Link to="/education"><button>Education</button></Link>
          <Link to="/organizations"><button>Organizations</button></Link>
          <Link to="/leisure"><button>Leisure</button></Link>
      </div>        
    )
  }
};
