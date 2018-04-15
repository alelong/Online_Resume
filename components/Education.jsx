import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module from './SectionTextModule.jsx';

export default class Education_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_content">
        <Section_Head 
          name="Education"
        />
        <Section_Text_Module 
          copy="This will be School #1"
        />
        <Section_Text_Module 
          copy="This will be School #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
      </div>
    )
  }
};
