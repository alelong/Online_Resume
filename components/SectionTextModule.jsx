import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Section_Text_Module extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_text_module">
        <p>{this.props.copy}</p>
      </div>
    )
  }
};
