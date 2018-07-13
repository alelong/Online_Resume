import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {SkillsTile1, SkillsTile2, SkillsTile3, SkillsTile4, SkillsTile5, SkillsTile6} from './SkillsTiles.jsx';

const SkillsTile1Container = styled(Tile1)`
  color: #d3a29b;
  `;

const SkillsTile2Container = styled(Tile2)`
  color: #d3a29b;
  `;

const SkillsTile3Container = styled(Tile3)`
  background-color: #d3a29b;
  color: white;
  border: 0;
  `;

const SkillsTile4Container = styled(Tile4)`
  color: #d3a29b;
  `;

const SkillsTile5Container = styled(Tile5)`
  color: #d3a29b;
  `;

const SkillsTile6Container = styled(Tile6)`
  color: #d3a29b;
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1>My Technical Skills.</h1>
  </Typing>
) 

export class SkillsTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <SkillsTile1Container>
        <Section_Text_Module title="Java">
          <p>2/5</p>
        </Section_Text_Module>
      </SkillsTile1Container>
    )
  }
};

export class SkillsTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <SkillsTile2Container>
        <Section_Text_Module title="React.js">
          <p>3/5</p>
        </Section_Text_Module>
      </SkillsTile2Container>
    )
  }
};

export class SkillsTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <SkillsTile3Container>
        <TypedTile/>
      </SkillsTile3Container>
    )
  }
};

export class SkillsTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <SkillsTile4Container>
        <Section_Text_Module title="Javascript">
          <p>4/5</p>
        </Section_Text_Module>
      </SkillsTile4Container>
    )
  }
};

export class SkillsTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <SkillsTile5Container>
        <Section_Text_Module title="HTML/CSS">
          <p>5/5</p>
        </Section_Text_Module>
      </SkillsTile5Container>
    )
  }
};

export class SkillsTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <SkillsTile6Container>
        <Section_Text_Module title="Project Management">
          <p>3/5</p>
        </Section_Text_Module>
      </SkillsTile6Container>
    )
  }
};