import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module from './SectionTextModule.jsx';

export default class Organizations_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_content">
        <Section_Head 
          name="Organizations"
        />
        <Section_Text_Module 
          copy="This will be Orga #1"
        />
        <Section_Text_Module 
          copy="This will be Orga #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
      </div>
    )
  }
};
