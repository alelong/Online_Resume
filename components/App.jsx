import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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

class Section_Head extends Component {
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

class Section_Text_Module extends Component {
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

class Work_Section extends Component {
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

class Skills_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_content">
        <Section_Head
          name="Skills"
        />
        <Section_Text_Module 
          copy="This will be Skill #1"
        />
        <Section_Text_Module 
          copy="This will be Skill #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
      </div>
    )
  }
};

class Education_Section extends Component {
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

class Organizations_Section extends Component {
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

class Leisure_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_content">
        <Section_Head 
          name="Leisure"
        />
        <Section_Text_Module 
          copy="This will be Hobby #1"
        />
        <Section_Text_Module 
          copy="This will be Hobby #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
      </div>
    )
  }
};

module.exports = {
  Home,
  Section_Head,
  Section_Text_Module,
  Work_Section,
  Skills_Section,
  Education_Section,
  Organizations_Section,
  Leisure_Section
};
