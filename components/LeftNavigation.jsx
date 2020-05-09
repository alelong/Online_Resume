import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//var aboutNavImg = require('../img/About_NavigationBar.jpg');
//var homepageImg = require('../img/homepage_icon.png');

//TODO: dynamically calculate width of nav bar given bodyWidth (tried on 4/25 but failed)
import bodyWidth from './Skeleton.jsx';
export const navBarWidth = '6%';
var borderStyle = 'solid 2px';

import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Skills } from './Skills.jsx';
import { sectionColor as sectionColor_Organizations } from './Organizations.jsx';

const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: ${navBarWidth};
  height: 100%;
  z-index: 1;
  font-family: "Courier New", serif;
  font-size: 15px;
  position: relative;
`;

const AboutLink = styled(Link)`
  grid-row: 1/4;
  background-color: ${sectionColor_About};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  //border-bottom: ${borderStyle};
  //border-right: ${borderStyle};
`;

const SkillsLink = styled(Link)`
  grid-row: 4;
  background-color: ${sectionColor_Skills};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  //border-right: ${borderStyle};
`;

const OrgaLink = styled(Link)`
  grid-row: 5;
  background-color: ${sectionColor_Organizations};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  //border-top: ${borderStyle};
  //border-right: ${borderStyle};
`;

export default class LeftNavigation extends Component {
  render () {
    let lang = this.props.copyLang;
    let aboutSectionTitle = (lang == 'FR') ? 'À PROPOS' : 'ABOUT' ;
    let skillsSectionTitle = (lang == 'FR') ? 'LANG' : 'LANG';
    let clubsSectionTitle = (lang == 'FR') ? 'CLUBS' : 'CLUBS';
    return (
      <NavigationContainer>
        <AboutLink to={this.props.link_one}>{aboutSectionTitle}</AboutLink>
        <SkillsLink to={this.props.link_two}>{skillsSectionTitle}</SkillsLink>
        <OrgaLink to={this.props.link_three}>{clubsSectionTitle}</OrgaLink>
      </NavigationContainer>
    )
  }
};
