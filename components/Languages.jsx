import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, LangLevel} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import { sectionColor as sectionColor_About } from './About.jsx';
import { 
  Title_1_FR, 
  Title_2_FR, 
  Title_3_FR,
  Title_4_FR, 
  Title_5_FR, 
  Paragraph_5_FR,
  Title_6_FR,
  Description_1_FR, 
  Description_2_FR, 
  Description_4_FR,  
  Description_6_FR,
  Title_1_EN, 
  Title_2_EN, 
  Title_3_EN,
  Title_4_EN, 
  Title_5_EN, 
  Paragraph_5_EN,
  Title_6_EN,
  Description_1_EN, 
  Description_2_EN, 
  Description_4_EN,  
  Description_6_EN,
} from '../copy/Languages_Copy.jsx';

export const sectionColor = '#ce88a2';
export const sectionColor_secondary = '#F1E3E8';

const LanguagesTile1Container = styled(Tile1)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LanguagesTile2Container = styled(Tile2)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LanguagesTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  `;

const LanguagesTile4Container = styled(Tile4)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const LanguagesTile5Container = styled(Tile5)`
  padding-left: 3%;
  background-color: ${sectionColor};
  color: white;
  border-left: none !important;
  `;

const LanguagesTile6Container = styled(Tile6)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const TypedTile = ({title, paragraph}) => (
  <Typing speed={50}>
    <h1>{title}</h1>
    <span>{paragraph}</span>
  </Typing>
) 

export class LanguagesTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Description_1 = (lang == 'FR') ? Description_1_FR : Description_1_EN;
    return (
      <LanguagesTile1Container>
        <Section_Text_Module title={Title_1}>
          <LangLevel src="../img/Languages_fluent.png" />
          <Description_1/>
        </Section_Text_Module>
      </LanguagesTile1Container>
    )
  }
};

export class LanguagesTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Description_2 = (lang == 'FR') ? Description_2_FR : Description_2_EN;
    return (
      <LanguagesTile2Container>
        <Section_Text_Module title={Title_2}>
          <LangLevel src="../img/Languages_fluent.png" />
          <Description_2/>
        </Section_Text_Module>
      </LanguagesTile2Container>
    )
  }
};

export class LanguagesTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LanguagesTile3Container/>
    )
  }
};

export class LanguagesTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Description_4 = (lang == 'FR') ? Description_4_FR : Description_4_EN;
    return (
      <LanguagesTile4Container>
        <Section_Text_Module title={Title_4}>
          <LangLevel src="../img/Languages_good.png" />
          <Description_4/>
        </Section_Text_Module>
      </LanguagesTile4Container>
    )
  }
};

export class LanguagesTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Paragraph_5 = (lang == 'FR') ? Paragraph_5_FR : Paragraph_5_EN;
    return (
      <LanguagesTile5Container>
        <TypedTile title={Title_5} paragraph={Paragraph_5}/>
      </LanguagesTile5Container>
    )
  }
};

export class LanguagesTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Description_6 = (lang == 'FR') ? Description_6_FR : Description_6_EN;
    return (
      <LanguagesTile6Container>
        <Section_Text_Module title={Title_6}>
          <LangLevel src="../img/Languages_basic.png" />
          <Description_6/>
        </Section_Text_Module>
      </LanguagesTile6Container>
    )
  }
};