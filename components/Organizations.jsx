import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {OrganizationsTile1, OrganizationsTile2, OrganizationsTile3, OrganizationsTile4, OrganizationsTile5, OrganizationsTile6} from './OrganizationsTiles.jsx';

export const sectionColor = '#ce88a2';
//export const sectionColor = '#6d5b97';

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
} from '../copy/Organizations_Copy.jsx';


const OrganizationsTile1Container = styled(Tile1)`
  color: ${sectionColor};
  `;

const OrganizationsTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const OrganizationsTile3Container = styled(Tile3)`
  color: #ce88a2;
  background-color: ${sectionColor};
  `;

const OrganizationsTile4Container = styled(Tile4)`
  color: ${sectionColor};
  `;

const OrganizationsTile5Container = styled(Tile5)`
  background-color: ${sectionColor};
  color: white;
  border: 0;
  `;

const OrganizationsTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1>{Title_5}</h1>
  </Typing>
) 

export class OrganizationsTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <OrganizationsTile1Container>
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
        </Section_Text_Module>
      </OrganizationsTile1Container>
    )
  }
};

export class OrganizationsTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile2Container>
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
        </Section_Text_Module>
      </OrganizationsTile2Container>
    )
  }
};

export class OrganizationsTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile3Container/>
    )
  }
};

export class OrganizationsTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile4Container>
        <Section_Text_Module title={Title_4}>
          <p>{Paragraph_4}</p>
        </Section_Text_Module>
      </OrganizationsTile4Container>
    )
  }
};

export class OrganizationsTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile5Container>
        <TypedTile/>
      </OrganizationsTile5Container>
    )
  }
};

export class OrganizationsTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </OrganizationsTile6Container>
    )
  }
};