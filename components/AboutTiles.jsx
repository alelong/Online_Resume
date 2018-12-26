import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './AboutTiles.jsx';

var aboutImg = require('../img/Agathe_Lelong.jpg');
var aboutNavImg = require('../img/About_Navigation.jpg');
var sectionColor = '#283045';
var LinkedInLogo = require('../img/In-White-101px-R.png');
var InstagramLogo = require('../img/InstagramLogo.png');
var EmailIcon = require('../img/emailIcon.png');


const AboutTile1Container = styled(Tile1)`
  color: white;
  background-image: url(${aboutNavImg});
  border-color: ${sectionColor};
  border-style: solid;
  border-width: 1px;
  `;

const AboutTile2Container = styled(Tile2)`
  background-image: url(${aboutImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: white;
  border: none;
`;

const AboutTile3Container = styled(Tile3)`
  color: ${sectionColor};
  background-image: url(${aboutNavImg});
  border-top: none;
  `;

const AboutTile4Container = styled(Tile4)`
  color: ${sectionColor};
  `;

const AboutTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const AboutTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = () => (
    <Typing speed={50}>
      <span>Bonjour!</span>
    </Typing>
  )

export class AboutTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: false
    }
  }
  render () {
    return (
      <AboutTile1Container style={{flexDirection: 'row'}}>
        <a href="mailto:agathelelong@orange.fr" target="_top">
          <img src={EmailIcon} alt="Email me" style={{width: '105px', paddingRight: '26px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/agathelelong/" target="_blank">
          <img src={LinkedInLogo} alt="My LinkedIn profile" style={{width: '50px', paddingRight: '12px'}}/>
        </a>
        <a href="https://www.instagram.com/agathellg/" target="_blank">
          <img src={InstagramLogo} alt="My Instagram account" style={{width: '92px'}}/>
        </a>
      </AboutTile1Container>
    )
  }
};

export class AboutTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <AboutTile2Container>
        <TypedTile/>
      </AboutTile2Container>
    )
  }
};

export class AboutTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <AboutTile3Container/>
    )
  }
};

export class AboutTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <AboutTile4Container>
        <Section_Text_Module title="Wannabee Web Developer">
          <p>This is my online resume and React.js playground</p>
        </Section_Text_Module>
      </AboutTile4Container>
    )
  }
};

export class AboutTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <AboutTile5Container>
        <Section_Text_Module title="ID">
          <p>Born and raised in Brittany, France ; born in 1992</p>
        </Section_Text_Module>
      </AboutTile5Container>
    )
  }
};

export class AboutTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <AboutTile6Container>
        <Section_Text_Module title="Current occupation">
          <p>E-Commerce Consultant at Amaris Consulting</p>
        </Section_Text_Module>
      </AboutTile6Container>
    )
  }
};