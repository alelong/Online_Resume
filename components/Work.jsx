import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import { sectionColor as sectionColor_About } from './About.jsx';
import { 
  Title_1_FR, Title_1_EN,
  Paragraph_1_FR, Paragraph_1_EN, 
  Title_2_FR, Title_2_EN, 
  Location_2_FR, Location_2_EN, 
  Timeframe_2_FR, Timeframe_2_EN,  
  Description_2_FR, Description_2_EN, 
  Title_4_FR, Title_4_EN, 
  Location_4_FR, 
  Timeframe_4_FR, 
  Description_4_FR, 
  Location_4_EN, 
  Timeframe_4_EN, 
  Description_4_EN, 
  Title_5_FR, Title_5_EN,  
  Location_5_FR, 
  Timeframe_5_FR, 
  Description_5_FR, 
  Location_5_EN, 
  Timeframe_5_EN, 
  Description_5_EN, 
  Title_6_FR, Title_6_EN, 
  Location_6_FR, Location_6_EN,
  Timeframe_6_FR, Timeframe_6_EN,
  Description_6_FR, Description_6_EN,
} from '../copy/Work_Copy.jsx';

export const sectionColor = '#6d5b97';
export const sectionColor_secondary = '#EAE4FD';

const WorkTile1Container = styled(Tile1)`
  padding-left: 3%;
  background-color: ${sectionColor};
  color: white;
  border-right: none !important;
  `;

const WorkTile2Container = styled(Tile2)`
  color: ${sectionColor_About} ;
  background-color: ${sectionColor_secondary};
  `;

const WorkTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  color: ${sectionColor_About};
  `;

const WorkTile4Container = styled(Tile4)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const WorkTile5Container = styled(Tile5)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const WorkTile6Container = styled(Tile6)`
  color: ${sectionColor_About};
  background-color: ${sectionColor_secondary};
  `;

const TypedTile = ({title, paragraph}) => (
    <Typing speed={50}>
      <h1>{title}</h1>
      <span>{paragraph}</span>
    </Typing>
  )

export class WorkTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: true
    }
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Paragraph_1 = (lang == 'FR') ? Paragraph_1_FR : Paragraph_1_EN;
    return (
      <WorkTile1Container>
        <TypedTile title={Title_1} paragraph={Paragraph_1}/>
      </WorkTile1Container>
    )
  }
};

export class WorkTile2 extends Component {
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
      <WorkTile2Container>
        <Section_Text_Module title={Title_2}>
          <Location_2/>
          <Timeframe_2/>
          <Description_2/>
        </Section_Text_Module>
      </WorkTile2Container>
    )
  }
};

export class WorkTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile3Container/>
    )
  }
};

export class WorkTile4 extends Component {
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
      <WorkTile4Container>
        <Section_Text_Module title={Title_4}>
          <Location_4/>
          <Timeframe_4/>
          <Description_4/>
        </Section_Text_Module>
      </WorkTile4Container>
    )
  }
};

export class WorkTile5 extends Component {
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
      <WorkTile5Container>
        <Section_Text_Module title={Title_5}>
          <Location_5/>
          <Timeframe_5/>
          <Description_5/>
        </Section_Text_Module>
      </WorkTile5Container>
    )
  }
};

export class WorkTile6 extends Component {
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
      <WorkTile6Container>
        <Section_Text_Module title={Title_6}>
          <Location_6/>
          <Timeframe_6/>
          <Description_6/>
        </Section_Text_Module>
      </WorkTile6Container>
    )
  }
};