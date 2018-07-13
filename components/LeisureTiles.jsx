import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

var leisureImg = require('../img/sand.jpg');
var leisureNavImg = require('../img/Leisure_Navigation.jpg');

const LeisureTile1Container = styled(Tile1)`
  color: #cdb092;
  `;

const LeisureTile2Container = styled(Tile2)`
  color: #cdb092;
  `;

const LeisureTile3Container = styled(Tile3)`
  color: #cdb092;
  background-image: url(${leisureNavImg});
  `;

const LeisureTile4Container = styled(Tile4)`
  color: #cdb092;
  `;

const LeisureTile5Container = styled(Tile5)`
  color: #cdb092;
  `;

const LeisureTile6Container = styled(Tile6)`
  background-image: url(${leisureImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  color: #513E4D;
  `;

const TypedTile = () => (
  <Typing speed={50}>
    <h1>My hobbies.</h1>
    <span>From the court to the beach!</span>
  </Typing>
) 

export class LeisureTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <LeisureTile1Container>
        <Section_Text_Module title="Volleyball">
          <p>Player, Zogsports League</p>
        </Section_Text_Module>
      </LeisureTile1Container>
    )
  }
};

export class LeisureTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile2Container>
        <Section_Text_Module title="Surfing">
          <p>Waves and Sea addict</p>
        </Section_Text_Module>
      </LeisureTile2Container>
    )
  }
};

export class LeisureTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile3Container/>
    )
  }
};

export class LeisureTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile4Container>
        <Section_Text_Module title="Tennis">
          <p>Former competitor</p>
        </Section_Text_Module>
      </LeisureTile4Container>
    )
  }
};

export class LeisureTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile5Container>
        <Section_Text_Module title="Drawing and Painting">
          <p>"Artiste du dimanche"</p>
        </Section_Text_Module>
      </LeisureTile5Container>
    )
  }
};

export class LeisureTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <LeisureTile6Container>
        <TypedTile/>
      </LeisureTile6Container>
    )
  }
};