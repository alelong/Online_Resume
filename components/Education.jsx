import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './EducationTiles.jsx';

export const sectionColor = '#c37572';
//export const sectionColor = '#111c2f';

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
} from '../copy/Education_Copy.jsx';

const EducationTile1Container = styled(Tile1)`
  color: ${sectionColor};
  `;

const EducationTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const EducationTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  color: ${sectionColor};
  `;

const EducationTile4Container = styled(Tile4)`
  background-color: ${sectionColor};
  color: white;
  border: none;
  `;

const EducationTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const EducationTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = () => (
    <Typing speed={50}>
      <h1>{Title_4}</h1>
      <span>{Paragraph_4}</span>
    </Typing>
  )

export class EducationTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <EducationTile1Container>
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
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
    return (
      <EducationTile2Container>
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
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
    return (
      <EducationTile4Container>
        <TypedTile/>
      </EducationTile4Container>
    )
  }
};

export class EducationTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <EducationTile5Container>
        <Section_Text_Module title={Title_5}>
          <p>{Paragraph_5}</p>
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
    return (
      <EducationTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </EducationTile6Container>
    )
  }
};