import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

export const sectionColor = '#6d5b97';

//EN Copy
import { 
  Title_1, 
  Paragraph_1, 
  Title_2, 
  Workplace_2, 
  Timeframe_2, 
  Achievement1_2, 
  Achievement2_2, 
  Achievement3_2,
  Title_4, 
  Workplace_4, 
  Timeframe_4, 
  Achievement1_4, 
  Achievement2_4,
  Achievement3_4,
  Title_5, 
  Workplace_5, 
  Timeframe_5, 
  Achievement1_5, 
  Achievement2_5,
  Achievement3_5,
  Title_6, 
  Workplace_6, 
  Timeframe_6, 
  Achievement1_6, 
  Achievement2_6,
  Achievement3_6,
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

const TypedTile = () => (
    <Typing speed={50}>
      <h1>{Title_1}</h1>
      <span>{Paragraph_1}</span>
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
    return (
      <WorkTile1Container>
        <TypedTile/>
      </WorkTile1Container>
    )
  }
};

export class WorkTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
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