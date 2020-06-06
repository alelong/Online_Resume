import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Skills } from './Skills.jsx';
import { sectionColor as sectionColor_Languages } from './Languages.jsx';
import { sectionColor as sectionColor_Work } from './Work.jsx';
import { sectionColor as sectionColor_Education } from './Education.jsx';
import { sectionColor as sectionColor_Leisure, textColor } from './Leisure.jsx';

import { navBarWidth_desktop, navBarWidth_mobile, headerHeight_desktop, headerHeight_mobile, borderStyle, borderWidth, borderColor } from './Skeleton.jsx';

const NavigationContainer = styled.div`
  display: none;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      margin-top: ${props => props.visible ? '0' : '-77.5%'};
      -webkit-transition: top 1s ease-in-out;
      -moz-transition: top 1s ease-in-out;
      -ms-transition: top 1s ease-in-out;
      -o-transition: top 1s ease-in-out;
      transition: margin-top 1s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      z-index: 1;
      position: relative;
      font-family: "Courier New", serif;
      font-size: 4vmin;
      a {
        width: 100%;
        padding: 3% 0;
        text-decoration: none;
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: 0.7%;
        background-position-y: center;
        border-top-style: ${borderStyle};
        border-top-width: ${borderWidth};
        border-top-color: ${sectionColor_About};
        background-color: white;
        text-align: center;
      }
    }
`;

const HomeLink = styled(Link)`
  color: ${sectionColor_About};
  background-image: url(../img/homepage_icon_resized.png);
  border-top: none !important;
  :active{
    background-image: url(../img/homepage_icon_resized_open.png);
`;

const AboutLink = styled(Link)`
  color: ${sectionColor_About};
  background-image: url(../img/About_filled.png);
  :active{
    color: white;
    background-color: ${sectionColor_About};
    background-image: url(../img/About.png);
  }
`;

const WorkLink = styled(Link)`
  color: ${sectionColor_Work};
  background-image: url(../img/Work_filled.png);
  :active{
    color: white;
    background-color: ${sectionColor_Work};
    background-image: url(../img/Work.png);
  }
`;

const EducationLink = styled(Link)`
  color: ${sectionColor_Education};
  background-image: url(../img/Education_filled.png);
  :active{
    color: white;
    background-color: ${sectionColor_Education};
    background-image: url(../img/Education.png);
  }
`;

const SkillsLink = styled(Link)`
  color: ${sectionColor_Skills};
  background-image: url(../img/Skills_filled.png);
  :active{
    color: white;
    background-color: ${sectionColor_Skills};
    background-image: url(../img/Skills.png);
  }
`;

const LanguagesLink = styled(Link)`
  color: ${sectionColor_Languages};
  background-image: url(../img/Languages_filled.png);
  :active{
    color: white;
    background-color: ${sectionColor_Languages};
    background-image: url(../img/Languages.png);
  }
`;

const LeisureLink = styled(Link)`
  color: ${sectionColor_Leisure};
  background-image: url(../img/Leisure_filled.png);
  mark{
      background-color: white;
      color: ${sectionColor_Leisure};
  }
  :active{
    background-image: url(../img/Leisure.png), url(../img/sand.jpg);
    background-attachment: scroll, fixed;
    background-repeat: no-repeat, no-repeat;
    background-size: contain, cover;
    background-position-y: center;
  }
  
`;

export default class MobileNavigation extends Component {
  render () {
    let lang = this.props.copyLang;
    let homeSectionTitle = (lang == 'FR') ? 'ACCUEIL' : 'HOME' ;
    let aboutSectionTitle = (lang == 'FR') ? 'À PROPOS' : 'ABOUT' ;
    let workSectionTitle = (lang == 'FR') ? 'PRO' : 'WORK' ;
    let skillsSectionTitle = (lang == 'FR') ? 'COMP' : 'SKILLS';
    let educationSectionTitle = (lang == 'FR') ? 'ETUDES' : 'EDUCATION';
    let langSectionTitle = (lang == 'FR') ? 'LANGUES' : 'LANGUAGES';
    let leisureSectionTitle = (lang == 'FR') ? 'LOISIRS' : 'OFFLINE';
    return (
      <NavigationContainer visible={this.props.visible}>
        <HomeLink to={this.props.link_home} onClick={this.props.onClick}>{homeSectionTitle}</HomeLink>
        <AboutLink to={this.props.aboutLink} onClick={this.props.onClick}>{aboutSectionTitle}</AboutLink>
        <WorkLink to={this.props.workLink} onClick={this.props.onClick}>{workSectionTitle}</WorkLink>
        <EducationLink to={this.props.eduLink} onClick={this.props.onClick}>{educationSectionTitle}</EducationLink>
        <SkillsLink to={this.props.skillsLink} onClick={this.props.onClick}>{skillsSectionTitle}</SkillsLink>
        <LanguagesLink to={this.props.langLink} onClick={this.props.onClick}>{langSectionTitle}</LanguagesLink>
        <LeisureLink to={this.props.leisureLink} onClick={this.props.onClick}><mark>{leisureSectionTitle}</mark></LeisureLink>
      </NavigationContainer>
    )
  }
};
