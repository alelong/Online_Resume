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
  Location_1_FR, Location_1_EN,
  Timeframe_1_FR, Timeframe_1_EN,
  Description_1_FR, Description_1_EN, 
  Location_2_FR, Location_2_EN,
  Timeframe_2_FR, Timeframe_2_EN,
  Description_2_FR, Description_2_EN, 
  Location_4_FR, Location_4_EN,
  Timeframe_4_FR, Timeframe_4_EN,
  Description_4_FR, Description_4_EN,
  Location_5_FR, Location_5_EN,
  Timeframe_5_FR, Timeframe_5_EN,
  Description_5_FR, Description_5_EN,  
  Location_6_FR, Location_6_EN,
  Timeframe_6_FR, Timeframe_6_EN,
  Description_6_FR, Description_6_EN, 
  Title_1_EN, 
  Title_2_EN, 
  Title_3_EN,
  Title_4_EN, 
  Title_5_EN, 
  Title_6_EN,
} from '../copy/Education_Copy.jsx';

export const sectionColor = '#c37572';
export const sectionColor_secondary = '#EEDEDD';

const EducationTile1Container = styled(Tile1)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const EducationTile2Container = styled(Tile2)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const EducationTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  `;

const EducationTile4Container = styled(Tile4)`
  padding-left: 3%;
  background-color: ${sectionColor};
  color: white;
  border-right: none !important;
  `;

const EducationTile5Container = styled(Tile5)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const EducationTile6Container = styled(Tile6)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const TypedTile = ({title, Description}) => (
    <Typing speed={50}>
      <h1>{title}</h1>
      <span>{Description}</span>
    </Typing>
  )

export class EducationTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Location_1 = (lang == 'FR') ? Location_1_FR : Location_1_EN;
    let Timeframe_1 = (lang == 'FR') ? Timeframe_1_FR : Timeframe_1_EN;
    let Description_1 = (lang == 'FR') ? Description_1_FR : Description_1_EN;
    return (
      <EducationTile1Container>
        <Section_Text_Module title={Title_1}>
          <Location_1/>
          <Timeframe_1/>
          <Description_1/>
        </Section_Text_Module>
      </EducationTile1Container>
    )
  }
};

export class EducationTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Location_2 = (lang == 'FR') ? Location_2_FR : Location_2_EN;
    let Timeframe_2 = (lang == 'FR') ? Timeframe_2_FR : Timeframe_2_EN;
    let Description_2 = (lang == 'FR') ? Description_2_FR : Description_2_EN;
    return (
      <EducationTile2Container>
        <Section_Text_Module title={Title_2}>
          <Location_2/>
          <Timeframe_2/>
          <Description_2/>
        </Section_Text_Module>
      </EducationTile2Container>
    )
  }
};

export class EducationTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <EducationTile3Container/>
    )
  }
};

export class EducationTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Location_4 = (lang == 'FR') ? Location_4_FR : Location_4_EN;
    let Timeframe_4 = (lang == 'FR') ? Timeframe_4_FR : Timeframe_4_EN;
    let Description_4 = (lang == 'FR') ? Description_4_FR : Description_4_EN;
    return (
      <EducationTile4Container>
        <TypedTile title={Title_4} Description={Description_4}/>
      </EducationTile4Container>
    )
  }
};

export class EducationTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Location_5 = (lang == 'FR') ? Location_5_FR : Location_5_EN;
    let Timeframe_5 = (lang == 'FR') ? Timeframe_5_FR : Timeframe_5_EN;
    let Description_5 = (lang == 'FR') ? Description_5_FR : Description_5_EN;
    return (
      <EducationTile5Container>
        <Section_Text_Module title={Title_5}>
          <Location_5/>
          <Timeframe_5/>
          <Description_5/>
        </Section_Text_Module>
      </EducationTile5Container>
    )
  }
};

export class EducationTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Location_6 = (lang == 'FR') ? Location_6_FR : Location_6_EN;
    let Timeframe_6 = (lang == 'FR') ? Timeframe_6_FR : Timeframe_6_EN;
    let Description_6 = (lang == 'FR') ? Description_6_FR : Description_6_EN;
    return (
      <EducationTile6Container>
        <Section_Text_Module title={Title_6}>
          <Location_6/>
          <Timeframe_6/>
          <Description_6/>
        </Section_Text_Module>
      </EducationTile6Container>
    )
  }
};