import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module from './SectionTextModule.jsx';

export default class Work_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_content">
        <Section_Head 
          name="Work Experience"
        />
        <Section_Text_Module 
          copy="This will be Work Experience #1"
        />
        <Section_Text_Module 
          copy="This will be Work Experience #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
      </div>
    )
  }
};
