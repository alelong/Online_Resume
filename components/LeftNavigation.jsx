import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

var aboutNavImg = require('../img/About_Navigation.jpg');
var homepageImg = require('../img/homepage_icon.png');


const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: 5%;
  height: 100%;
  z-index: 1;
  font-family: "Georgia", serif;
  font-size: 26px;
  span {
    font-size: 10px
  }
  position: relative;
`;

const AboutLink = styled(Link)`
  grid-row: 1/4;
  background-image: url(${aboutNavImg});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const SkillsLink = styled(Link)`
  grid-row: 4;
  background-color: #d3a29b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const OrgaLink = styled(Link)`
  grid-row: 5;
  background-color: #ce88a2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
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
`;

export default class LeftNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <AboutLink to="/about">A<span>BOUT</span></AboutLink>
          <SkillsLink to="/skills">S<span>KILLS</span></SkillsLink>
          <OrgaLink to="/organizations">O<span>RGANIZATIONS</span></OrgaLink>
          <HomeLink to="/"/>
      </NavigationContainer>        
    )
  }
};
