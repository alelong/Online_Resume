import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

var leisureNavImg = require('../img/Leisure_Navigation.jpg');

const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: 5%;
  height: 100%;
  z-index:1;
  font-family: "Georgia", serif;
  font-size: 26px;
  span {
    font-size: 10px
  }
`;

const WorkLink = styled(Link)`
  grid-row: 1;
  background-color: #6d5b97;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const EducationLink = styled(Link)`
  grid-row: 2/5;
  background-color: #c37572;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const LeisureLink = styled(Link)`
  grid-row: 5/6;
  background-image: url(${leisureNavImg});
  color: #513E4D;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

export default class LeftNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <WorkLink to="/work">W<span>ORK</span></WorkLink>
          <EducationLink to="/education">E<span>DUCATION</span></EducationLink>
          <LeisureLink to="/leisure">L<span>EISURE</span></LeisureLink>
      </NavigationContainer>        
    )
  }
};
