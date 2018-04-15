import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render () {
    return (
      <div className="navigation">
          <Link to="/"><button>Home</button></Link>
          <Link to="/work"><button>Work Experience</button></Link>
          <Link to="/skills"><button>Skills</button></Link>
          <Link to="/education"><button>Education</button></Link>
          <Link to="/organizations"><button>Organizations</button></Link>
          <Link to="/leisure"><button>Leisure</button></Link>
      </div>        
    )
  }
};
