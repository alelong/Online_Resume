import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, IDPhotoTile} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './AboutTiles.jsx';

export const sectionColor = '#111c2f';

// Copy
import { 
  Hello_msg_FR, 
  Title_4_FR, 
  Title_5_FR, 
  Title_6_FR, 
  Paragraph_4_FR, 
  Paragraph_5_FR, 
  Paragraph_6_FR, 
  EmailIcon_alt_FR, 
  LinkedInLogo_alt_FR, 
  InstagramLogo_alt_FR,
  Hello_msg_EN, 
  Title_4_EN, 
  Title_5_EN, 
  Title_6_EN, 
  Paragraph_4_EN, 
  Paragraph_5_EN, 
  Paragraph_6_EN, 
  EmailIcon_alt_EN, 
  LinkedInLogo_alt_EN, 
  InstagramLogo_alt_EN
} from '../copy/About_Copy.jsx';

const AboutTile1Container = styled(Tile1)`
  color: ${sectionColor};
  background-color: ${sectionColor};
  `;

const AboutTile2Container = styled(Tile2)`
  color: ${sectionColor};
`;

const AboutTile3Container = styled(Tile3)`
  color: ${sectionColor};
  background-image: url(../img/About_Navigation.jpg);
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

const TypedTile = ({text}) => (
    <Typing speed={50}>
      <span>{text}</span>
    </Typing>
  )

export class AboutTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let EmailIcon_alt = (lang == 'FR') ? EmailIcon_alt_FR : EmailIcon_alt_EN;
    let LinkedInLogo_alt = (lang == 'FR') ? LinkedInLogo_alt_FR : LinkedInLogo_alt_EN;
    let InstagramLogo_alt = (lang == 'FR') ? InstagramLogo_alt_FR : InstagramLogo_alt_EN;
    return (
      <AboutTile1Container style={{flexDirection: 'row'}}>
        <a href="mailto:agathelelong@orange.fr" target="_top">
          <img src="../img/Email.png" alt={EmailIcon_alt} style={{width: '105px', paddingRight: '26px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/agathelelong/" target="_blank">
          <img src="../img/LinkedIn.png" alt={LinkedInLogo_alt} style={{width: '50px', paddingRight: '12px'}}/>
        </a>
        <a href="https://www.instagram.com/agathellg/" target="_blank">
          <img src="../img/Instagram.png" alt={InstagramLogo_alt} style={{width: '92px'}}/>
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
    let lang = this.props.copyLang;
    let Hello_msg = (lang == 'FR') ? Hello_msg_FR : Hello_msg_EN;
    return (
      <AboutTile2Container>
        <TypedTile text = {Hello_msg}/>
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
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Paragraph_4 = (lang == 'FR') ? Paragraph_4_FR : Paragraph_4_EN;
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
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Paragraph_5 = (lang == 'FR') ? Paragraph_5_FR : Paragraph_5_EN;
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
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Paragraph_6 = (lang == 'FR') ? Paragraph_6_FR : Paragraph_6_EN;
    return (
      <AboutTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </AboutTile6Container>
    )
  }
};