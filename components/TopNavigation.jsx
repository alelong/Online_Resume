import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Work } from './Work.jsx';
import { sectionColor as sectionColor_Skills } from './Skills.jsx';
import { sectionColor as sectionColor_Education } from './Education.jsx';
import { sectionColor as sectionColor_Languages } from './Languages.jsx';
import { sectionColor as sectionColor_Leisure } from './Leisure.jsx';
import { sectionColor_secondary as sectionColor_About_2 } from './About.jsx';
import { sectionColor_secondary as sectionColor_Work_2 } from './Work.jsx';
import { sectionColor_secondary as sectionColor_Skills_2 } from './Skills.jsx';
import { sectionColor_secondary as sectionColor_Education_2 } from './Education.jsx';
import { sectionColor_secondary as sectionColor_Languages_2 } from './Languages.jsx';
import { sectionColor_secondary as sectionColor_Leisure_2 } from './Leisure.jsx';

import { topMenuHeight_desktop, topMenuHeight_mobile, navBarWidth_desktop, navBarWidth_mobile } from './Skeleton.jsx';

const TopMenuContainer = styled.div`
  width: 100%;
  height: ${topMenuHeight_desktop};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white ;
  color: inherit ;
  font-family: "Courier New", serif;
  font-size: 3vmin;
  z-index: 1;
  position: relative;
  a {
    text-decoration: none;
    border: none;
    color: inherit;
    cursor:  pointer;
    transition: opacity 0.5s;
    /*:hover{
      border-style: solid;
      border-width: 2px 0;
    }*/
  }
  @media only screen
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      display: none;
      height: ${topMenuHeight_mobile};
      a:hover {
        background-color: initial;
        border: none;
      }
  }
`;

const HomepageLink = styled(Link)`
  width: ${navBarWidth_desktop};
  height: ${topMenuHeight_desktop};
  background-image: url(../img/homepage_icon.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  left: 0;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      height: ${topMenuHeight_mobile};
      width: ${navBarWidth_mobile};
  }
`;

const AboutMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_About_2};
    border-color: ${sectionColor_About};
  }*/
`;

const WorkMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_Work_2};
    border-color: ${sectionColor_Work};
  }*/
`;

const SkillsMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_Skills_2};
    border-color: ${sectionColor_Skills};
  }*/
`;

const EducationMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_Education_2};
    border-color: ${sectionColor_Education};
  }*/
`;

const LangMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_Languages_2};
    border-color: ${sectionColor_Languages};
  }*/
`;

const LeisureMenuItem = styled(Link)`
  /*:hover{
    background-color: ${sectionColor_Leisure_2};
    border-color: ${sectionColor_Leisure};
  }*/
`;

export default class TopMenu extends Component {
  render () {
    let lang = this.props.copyLang;
    let aboutSectionTitle = (lang == 'FR') ? 'À PROPOS' : 'ABOUT' ;
    let workSectionTitle = (lang == 'FR') ? 'TRAVAIL' : 'WORK' ;
    let educationSectionTitle = (lang == 'FR') ? 'ÉTUDES' : 'EDUCATION';
    let skillsSectionTitle = (lang == 'FR') ? 'COMPÉTENCES' : 'SKILLS';
    let langSectionTitle = (lang == 'FR') ? 'LANGUES' : 'LANGUAGES';
    let leisureSectionTitle = (lang == 'FR') ? 'LOISIRS' : 'INTERESTS';
    return (
        <TopMenuContainer>
          <AboutMenuItem to={this.props.aboutLink}>{aboutSectionTitle}</AboutMenuItem>
          <WorkMenuItem to={this.props.workLink}>{workSectionTitle}</WorkMenuItem>
          <EducationMenuItem to={this.props.eduLink}>{educationSectionTitle}</EducationMenuItem>
          <SkillsMenuItem to={this.props.skillsLink}>{skillsSectionTitle}</SkillsMenuItem>
          <LangMenuItem to={this.props.langLink}>{langSectionTitle}</LangMenuItem>
          <LeisureMenuItem to={this.props.leisureLink}>{leisureSectionTitle}</LeisureMenuItem>
        </TopMenuContainer>
    )
  }
};
