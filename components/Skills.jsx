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
  Title_1_FR, 
  Title_2_FR, 
  Title_3_FR,
  Title_4_FR, 
  Title_5_FR, 
  Title_6_FR,
  Paragraph_1_FR, 
  Paragraph_2_FR, 
  Paragraph_3_FR,
  Paragraph_4_FR, 
  Paragraph_5_FR, 
  Paragraph_6_FR,
  Title_1_EN, 
  Title_2_EN, 
  Title_3_EN,
  Title_4_EN, 
  Title_5_EN, 
  Title_6_EN,
  Paragraph_1_EN, 
  Paragraph_2_EN, 
  Paragraph_3_EN,
  Paragraph_4_EN, 
  Paragraph_5_EN, 
  Paragraph_6_EN,
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
    let Paragraph_1 = (lang == 'FR') ? Paragraph_1_FR : Paragraph_1_EN;
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
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Paragraph_2 = (lang == 'FR') ? Paragraph_2_FR : Paragraph_2_EN;
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
    let Paragraph_4 = (lang == 'FR') ? Paragraph_4_FR : Paragraph_4_EN;
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
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Paragraph_5 = (lang == 'FR') ? Paragraph_5_FR : Paragraph_5_EN;
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
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Paragraph_6 = (lang == 'FR') ? Paragraph_6_FR : Paragraph_6_EN;
    return (
      <SkillsTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </SkillsTile6Container>
    )
  }
};