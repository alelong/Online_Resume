import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//var aboutNavImg = require('../img/About_NavigationBar.jpg');
var homepageImg = require('../img/homepage_icon.png');

//TODO: dynamically calculate width of nav bar given bodyWidth (tried on 4/25 but failed)
import bodyWidth from './Skeleton.jsx';
var navBarWidth = '6%';

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

const HomeLink = styled(Link)`
  background-image: url(${homepageImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 7%;
  justify-content: center;
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
`;

export default class LeftNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <AboutLink to="/about">ABOUT</AboutLink>
          <SkillsLink to="/skills">LANG</SkillsLink>
          <OrgaLink to="/organizations">CLUBS</OrgaLink>
          <HomeLink to="/"/>
      </NavigationContainer>        
    )
  }
};
