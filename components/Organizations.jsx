import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {OrganizationsTile1, OrganizationsTile2, OrganizationsTile3, OrganizationsTile4, OrganizationsTile5, OrganizationsTile6} from './OrganizationsTiles.jsx';

const OrganizationsTile1Container = styled(Tile1)`
  color: #ce88a2;
  `;

const OrganizationsTile2Container = styled(Tile2)`
  color: #ce88a2;
  `;

const OrganizationsTile3Container = styled(Tile3)`
  color: #ce88a2;
  background-color: #ce88a2;
  `;

const OrganizationsTile4Container = styled(Tile4)`
  color: #ce88a2;
  `;

const OrganizationsTile5Container = styled(Tile5)`
  background-color: #ce88a2;
  color: white;
  border: 0;
  `;

const OrganizationsTile6Container = styled(Tile6)`
  color: #ce88a2;
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1>My commitments in clubs and charities.</h1>
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
        <Section_Text_Module title="Telecom ParisTech Alumni, Paris">
          <p>Donator</p>
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
        <Section_Text_Module title="BZH New York">
          <p>Newsletter Administrator</p>
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
        <Section_Text_Module title="Free Code Camp, New York">
          <p>Student and Donator</p>
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
        <Section_Text_Module title="L'Entraide Francaise, New York">
          <p>Social media lead</p>
        </Section_Text_Module>
      </OrganizationsTile6Container>
    )
  }
};