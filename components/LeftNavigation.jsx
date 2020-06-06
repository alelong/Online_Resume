import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Skills } from './Skills.jsx';
import { sectionColor as sectionColor_Languages } from './Languages.jsx';

import { navBarWidth_desktop, navBarWidth_mobile, borderStyle, borderWidth, borderColor } from './Skeleton.jsx';

const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: ${navBarWidth_desktop};
  height: 100%;
  z-index: 1;
  font-family: "Courier New", serif;
  font-size: 15px;
  position: relative;
  a {
    border-bottom-style: ${borderStyle};
    border-bottom-width: ${borderWidth};
    border-bottom-color: ${borderColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      display: none;
      width: ${navBarWidth_mobile};
      grid-template-rows: 1fr 1fr 1fr 0.33fr 1fr 1fr;
  }
`;

const AboutLink = styled(Link)`
  grid-row: 1/4;
  background-color: ${sectionColor_About};
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  border-top-color: ${borderColor};
  background-image: url(../img/About.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 1/4;
  }
`;

const SkillsLink = styled(Link)`
  grid-row: 4;
  background-color: ${sectionColor_Skills};
  background-image: url(../img/Skills.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 4/5;
  }
`;

const LanguagesLink = styled(Link)`
  grid-row: 5;
  background-color: ${sectionColor_Languages};
  background-image: url(../img/Languages.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 5/7;
  }
`;

export default class LeftNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
        <AboutLink to={this.props.link_one}/>
        <SkillsLink to={this.props.link_two}/>
        <LanguagesLink to={this.props.link_three}/>
      </NavigationContainer>
    )
  }
};
