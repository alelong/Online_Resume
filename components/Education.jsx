import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
var sectionColor = '#c37572';
//IMPORT statement to insert in App.jsx below:
//import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './EducationTiles.jsx';

const EducationTile1Container = styled(Tile1)`
  color: ${sectionColor};
  `;

const EducationTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const EducationTile3Container = styled(Tile3)`
  background-color: #c37572;
  color: ${sectionColor};
  `;

const EducationTile4Container = styled(Tile4)`
  background-color: ${sectionColor};
  color: white;
  border: 0;
  `;

const EducationTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const EducationTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = () => (
    <Typing speed={50}>
      <h1>My Education.</h1>
      <span>Master's degree in Computer Science obtained in a French Grande Ecole, with a pinch of Digital Marketing courses.</span>
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
        <Section_Text_Module title="HEC Paris, France">
          <p>Management and New Technologies, Class of 2015</p>
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
        <Section_Text_Module title="Telecom ParisTech, Paris, France">
          <p>Masters Degree in Computer Science, Class of 2015</p>
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
        <Section_Text_Module title="Lycee Louis Le Grand, Paris, France">
          <p>Classe Preparatoire Scientifique MPSI, MP*</p>
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
        <Section_Text_Module title="Lycee Naval, Brest, France">
          <p>High School, Scientific curriculum</p>
        </Section_Text_Module>
      </EducationTile6Container>
    )
  }
};