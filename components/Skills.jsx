import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import { sectionColor as sectionColor_About } from './About.jsx';
import { 
  Title_1_FR, 
  Title_2_FR, 
  Title_3_FR,
  Title_4_FR, 
  Title_5_FR, 
  Title_6_FR,
  Description_1_FR, 
  Description_2_FR, 
  Description_4_FR, 
  Description_5_FR, 
  Description_6_FR,
  Title_1_EN, 
  Title_2_EN, 
  Title_3_EN,
  Title_4_EN, 
  Title_5_EN, 
  Title_6_EN,
  Description_1_EN, 
  Description_2_EN, 
  Description_4_EN, 
  Description_5_EN, 
  Description_6_EN,
} from '../copy/Skills_Copy.jsx';

export const sectionColor = '#513E4D';
export const sectionColor_secondary = '#E7DBE6';

const SkillsTile1Container = styled(Tile1)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const SkillsTile2Container = styled(Tile2)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const SkillsTile3Container = styled(Tile3)`
  padding-left: 3%;
  background-color: ${sectionColor};
  color: white;
  border-left: none !important;
  `;

const SkillsTile4Container = styled(Tile4)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const SkillsTile5Container = styled(Tile5)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const SkillsTile6Container = styled(Tile6)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const TypedTile = ({text}) => (
  <Typing speed={50}>
    <h1>{text}</h1>
  </Typing>
) 

export class SkillsTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Description_1 = (lang == 'FR') ? Description_1_FR : Description_1_EN;
    return (
      <SkillsTile1Container>
        <Section_Text_Module title={Title_1}>
          <Description_1/>
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
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Description_2 = (lang == 'FR') ? Description_2_FR : Description_2_EN;
    return (
      <SkillsTile2Container>
        <Section_Text_Module title={Title_2}>
          <Description_2/>
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
    let lang = this.props.copyLang;
    let Title_3 = (lang == 'FR') ? Title_3_FR : Title_3_EN;
    return (
      <SkillsTile3Container>
        <TypedTile text={Title_3}/>
      </SkillsTile3Container>
    )
  }
};

export class SkillsTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Description_4 = (lang == 'FR') ? Description_4_FR : Description_4_EN;
    return (
      <SkillsTile4Container>
        <Section_Text_Module title={Title_4}>
          <Description_4/>
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
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Description_5 = (lang == 'FR') ? Description_5_FR : Description_5_EN;
    return (
      <SkillsTile5Container>
        <Section_Text_Module title={Title_5}>
          <Description_5/>
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
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Description_6 = (lang == 'FR') ? Description_6_FR : Description_6_EN;
    return (
      <SkillsTile6Container>
        <Section_Text_Module title={Title_6}>
          <Description_6/>
        </Section_Text_Module>
      </SkillsTile6Container>
    )
  }
};