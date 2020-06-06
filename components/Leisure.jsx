import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import { sectionColor as sectionColor_About } from './About.jsx';
import { 
  Title_1, 
  Title_2, 
  Title_3,
  Title_4, 
  Title_5, 
  Title_6,
  Paragraph_1, 
  Paragraph_2, 
  Paragraph_3,
  Paragraph_4, 
  Paragraph_5, 
  Paragraph_6,
} from '../copy/Leisure_Copy.jsx';

export const sectionColor = '#513E4D';
export const sectionColor_secondary = '#FBF7F1';

const LeisureTile1Container = styled(Tile1)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LeisureTile2Container = styled(Tile2)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LeisureTile3Container = styled(Tile3)`
  color: ${sectionColor_About};
  background-image: url(../img/sand.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  `;

const LeisureTile4Container = styled(Tile4)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LeisureTile5Container = styled(Tile5)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LeisureTile6Container = styled(Tile6)`
  padding-left: 3%;
  background-image: url(../img/sand.jpg);
  background-attachment: fixed;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${sectionColor_About};
  border-right: none !important;
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1><mark style={{backgroundColor: 'white', color: '#513E4D'}}>{Title_6}</mark></h1>
    <span><mark style={{backgroundColor: 'white', color: '#513E4D'}}>{Paragraph_6}</mark></span>
  </Typing>
) 

export class LeisureTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <LeisureTile1Container>
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
        </Section_Text_Module>
      </LeisureTile1Container>
    )
  }
};

export class LeisureTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile2Container>
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
        </Section_Text_Module>
      </LeisureTile2Container>
    )
  }
};

export class LeisureTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile3Container/>
    )
  }
};

export class LeisureTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile4Container>
        <Section_Text_Module title={Title_4}>
          <p>{Paragraph_4}</p>
        </Section_Text_Module>
      </LeisureTile4Container>
    )
  }
};

export class LeisureTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile5Container>
        <Section_Text_Module title={Title_5}>
          <p>{Paragraph_5}</p>
        </Section_Text_Module>
      </LeisureTile5Container>
    )
  }
};

export class LeisureTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile6Container>
        <TypedTile/>
      </LeisureTile6Container>
    )
  }
};