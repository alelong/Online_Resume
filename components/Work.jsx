import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

export const sectionColor = '#6d5b97';

//EN Copy
import { 
  Title_1_FR, Title_1_EN,
  Paragraph_1_FR, Paragraph_1_EN, 
  Title_2_FR, Title_2_EN, 
  Workplace_2_FR, Workplace_2_EN, 
  Timeframe_2_FR, Timeframe_2_EN,  
  Achievement1_2_FR, Achievement1_2_EN, 
  Achievement2_2_FR, Achievement2_2_EN,
  Achievement3_2_FR, Achievement3_2_EN,
  Title_4_FR, Title_4_EN, 
  Workplace_4_FR, 
  Timeframe_4_FR, 
  Achievement1_4_FR, 
  Achievement2_4_FR,
  Achievement3_4_FR,
  Workplace_4_EN, 
  Timeframe_4_EN, 
  Achievement1_4_EN, 
  Achievement2_4_EN,
  Achievement3_4_EN,
  Title_5_FR, Title_5_EN,  
  Workplace_5_FR, 
  Timeframe_5_FR, 
  Achievement1_5_FR, 
  Achievement2_5_FR,
  Achievement3_5_FR,
  Workplace_5_EN, 
  Timeframe_5_EN, 
  Achievement1_5_EN, 
  Achievement2_5_EN,
  Achievement3_5_EN,
  Title_6_FR, Title_6_EN, 
  Workplace_6_FR, Workplace_6_EN,
  Timeframe_6_FR, Timeframe_6_EN,
  Achievement1_6_FR, Achievement1_6_EN,
  Achievement2_6_FR, Achievement2_6_EN,
  Achievement3_6_FR, Achievement3_6_EN,
} from '../copy/Work_Copy.jsx';

const WorkTile1Container = styled(Tile1)`
  background-color: ${sectionColor};
  color: white;
  border:0;
  `;

const WorkTile2Container = styled(Tile2)`
  color: ${sectionColor} ;
  `;

const WorkTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  //opacity: 75%;
  color: ${sectionColor};
  `;

const WorkTile4Container = styled(Tile4)`
  color: ${sectionColor};
  `;

const WorkTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const WorkTile6Container = styled(Tile6)`
  color: ${sectionColor};
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
    let Workplace_2 = (lang == 'FR') ? Workplace_2_FR : Workplace_2_EN;
    let Timeframe_2 = (lang == 'FR') ? Timeframe_2_FR : Timeframe_2_EN;
    let Achievement1_2 = (lang == 'FR') ? Achievement1_2_FR : Achievement1_2_EN;
    let Achievement2_2 = (lang == 'FR') ? Achievement2_2_FR : Achievement2_2_EN;
    let Achievement3_2 = (lang == 'FR') ? Achievement3_2_FR : Achievement3_2_EN;
    return (
      <WorkTile2Container>
        <Section_Text_Module title={Title_2}>
          <p style={{fontStyle: 'italic'}}>
            {Workplace_2}<br/>
            {Timeframe_2}
          </p>
          <p>
            {Achievement1_2}<br/>
            {Achievement2_2}<br/>
            {Achievement3_2}
          </p>
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
    let Workplace_4 = (lang == 'FR') ? Workplace_4_FR : Workplace_4_EN;
    let Timeframe_4 = (lang == 'FR') ? Timeframe_4_FR : Timeframe_4_EN;
    let Achievement1_4 = (lang == 'FR') ? Achievement1_4_FR : Achievement1_4_EN;
    let Achievement2_4 = (lang == 'FR') ? Achievement2_4_FR : Achievement2_4_EN;
    let Achievement3_4 = (lang == 'FR') ? Achievement3_4_FR : Achievement3_4_EN;
    return (
      <WorkTile4Container>
        <Section_Text_Module title={Title_4}>
          <p style={{fontStyle: 'italic'}}>
            {Workplace_4}<br/>
            {Timeframe_4} 
          </p>
          <p>
            {Achievement1_4}<br/>
            {Achievement2_4}<br/>
            {Achievement3_4}
          </p>
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
    let Workplace_5 = (lang == 'FR') ? Workplace_5_FR : Workplace_5_EN;
    let Timeframe_5 = (lang == 'FR') ? Timeframe_5_FR : Timeframe_5_EN;
    let Achievement1_5 = (lang == 'FR') ? Achievement1_5_FR : Achievement1_5_EN;
    let Achievement2_5 = (lang == 'FR') ? Achievement2_5_FR : Achievement2_5_EN;
    let Achievement3_5 = (lang == 'FR') ? Achievement3_5_FR : Achievement3_5_EN;
    return (
      <WorkTile5Container>
        <Section_Text_Module title={Title_5}>
          <p style={{fontStyle: 'italic'}}>
            {Workplace_5}<br/>
            {Timeframe_5} 
          </p>
          <p>
            {Achievement1_5}<br/>
            {Achievement2_5}<br/>
            {Achievement3_5}
          </p>
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
    let Workplace_6 = (lang == 'FR') ? Workplace_6_FR : Workplace_6_EN;
    let Timeframe_6 = (lang == 'FR') ? Timeframe_6_FR : Timeframe_6_EN;
    let Achievement1_6 = (lang == 'FR') ? Achievement1_6_FR : Achievement1_6_EN;
    let Achievement2_6 = (lang == 'FR') ? Achievement2_6_FR : Achievement2_6_EN;
    let Achievement3_6 = (lang == 'FR') ? Achievement3_6_FR : Achievement3_6_EN;
    return (
      <WorkTile6Container>
        <Section_Text_Module title={Title_6}>
          <p style={{fontStyle: 'italic'}}>
           {Workplace_6}<br/>
           {Timeframe_6}
          </p>
          <p>
            {Achievement1_6}<br/>
            {Achievement2_6}<br/>
            {Achievement3_6} 
          </p>
        </Section_Text_Module>
      </WorkTile6Container>
    )
  }
};