import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//import statement to insert in App.jsx: import {HomeTile1, HomeTile2, HomeTile3, HomeTile4, HomeTile5, HomeTile6} from './HomeTiles.jsx';

var leisureImg = require('../img/sand.jpg');
var aboutImg = require('../img/Agathe_Lelong.jpg');

const HomeTile1Container = Tile1.withComponent(Link).extend`
  background-color: #6d5b97;
  border: none;
  color: white;
  `;

const HomeTile2Container = Tile2.withComponent(Link).extend`
  background-image: url(${aboutImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  border: none;
  color: white;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      background-size: cover;
    }
  }
  `;

const HomeTile3Container = Tile3.withComponent(Link).extend`
  background-color: #d3a29b;
  border: none;
  color: white;
  cursor: pointer;
  `;

const HomeTile4Container = Tile4.withComponent(Link).extend`
  background-color: #c37572;
  border: none;
  color: white;
  `;

const HomeTile5Container = Tile5.withComponent(Link).extend`
  background-color: #ce88a2;
  border: none;
  color: white;
  `;

const HomeTile6Container = Tile6.withComponent(Link).extend`
  background-image: url(${leisureImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  color: white;
  `;

const AboutTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={500}/>
        <span>Bonjour!</span>
    </Typing>
  )

const WorkTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={1000}/>
        <span>Work</span>
    </Typing>
  )

const SkillsTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={1500}/>
        <span>Skills</span>
    </Typing>
  )

const EducationTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={2000}/>
        <span>Education</span>
    </Typing>
  )

const ClubsTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={2500}/>
        <span>Clubs</span>
    </Typing>
  )

const LeisureTypedTile = () => (
    <Typing speed={100}>
      <Typing.Delay ms={3000}/>
        <span>Hobbies</span>
    </Typing>
  )

export class HomeTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSelectedTile: false
    }
  }
  render () {
    return (
      <HomeTile1Container to="/work">
        <WorkTypedTile/>
      </HomeTile1Container>
    )
  }
};

export class HomeTile2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSelectedTile: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var tile = true;
    this.props.callbackFromParent(tile);
  };

  render () {
    return (
      <HomeTile2Container to="/about">
        <AboutTypedTile/>
      </HomeTile2Container>
    )
  }
};

export class HomeTile3 extends Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
      <HomeTile3Container to="/skills">
        <SkillsTypedTile/>
      </HomeTile3Container>
    )
  }
};

export class HomeTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <HomeTile4Container to="/education">
        <EducationTypedTile/>
      </HomeTile4Container>
    )
  }
};

export class HomeTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <HomeTile5Container to="/organizations">
        <ClubsTypedTile/>
      </HomeTile5Container>
    )
  }
};

export class HomeTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <HomeTile6Container to="/leisure">
        <LeisureTypedTile/>
      </HomeTile6Container>
    )
  }
};