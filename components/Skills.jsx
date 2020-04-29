import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

//export const sectionColor = '#d3a29b';
export const sectionColor = '#513E4D';

//EN Copy
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
} from '../copy/Skills_Copy.jsx';

const SkillsTile1Container = styled(Tile1)`
  color: ${sectionColor};
  `;

const SkillsTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const SkillsTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  color: white;
  border: 0;
  `;

const SkillsTile4Container = styled(Tile4)`
  color: ${sectionColor};
  `;

const SkillsTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const SkillsTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1>{Title_3}</h1>
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
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
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
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
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
        <Section_Text_Module title={Title_4}>
          <p>{Paragraph_4}</p>
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
        <Section_Text_Module title={Title_5}>
          <p>{Paragraph_5}</p>
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
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </SkillsTile6Container>
    )
  }
};