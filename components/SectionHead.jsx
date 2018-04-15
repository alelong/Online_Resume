import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Section_Head extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_head">
        <h1>{this.props.name}</h1>
        <Link to="/"><button>Back Home</button></Link>
      </div>
    )
  }
};
