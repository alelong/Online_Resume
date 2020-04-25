import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './AboutTiles.jsx';

export const sectionColor = '#111c2f';

//Images import
var aboutImg = require('../img/Agathe_Lelong.jpg');
var aboutNavImg = require('../img/About_Navigation.jpg');
var LinkedInLogo = require('../img/In-White-101px-R.png');
var InstagramLogo = require('../img/InstagramLogo.png');
var EmailIcon = require('../img/emailIcon.png');

//EN Copy
import { 
  Hello_msg, 
  Title_4, 
  Title_5, 
  Title_6, 
  Paragraph_4, 
  Paragraph_5, 
  Paragraph_6, 
  EmailIcon_alt, 
  LinkedInIcon_alt, 
  InstagramIcon_alt 
} from '../copy/About_Copy.jsx';

const AboutTile1Container = styled(Tile1)`
  color: ${sectionColor};
  background-color: ${sectionColor};
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
  background-attachment: fixed;
  background-size: contain;
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
      <span>{Hello_msg}</span>
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
          <img src={EmailIcon} alt={EmailIcon_alt} style={{width: '105px', paddingRight: '26px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/agathelelong/" target="_blank">
          <img src={LinkedInLogo} alt={LinkedInIcon_alt} style={{width: '50px', paddingRight: '12px'}}/>
        </a>
        <a href="https://www.instagram.com/agathellg/" target="_blank">
          <img src={InstagramLogo} alt={InstagramIcon_alt} style={{width: '92px'}}/>
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
        <Section_Text_Module title={Title_4}>
          <p>{Paragraph_4}</p>
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
        <Section_Text_Module title={Title_5}>
          <p>{Paragraph_5}</p>
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
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </AboutTile6Container>
    )
  }
};