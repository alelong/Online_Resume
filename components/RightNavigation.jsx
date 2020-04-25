import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

var leisureNavImg = require('../img/Leisure_Navigation.jpg');
var leisureImg = require('../img/sand.jpg');

//TODO: dynamically calculate width of nav bar given bodyWidth (tried on 4/25 but failed)
import bodyWidth from './Skeleton.jsx';
var navBarWidth = '6%';

import { sectionColor as sectionColor_Work } from './Work.jsx';
import { sectionColor as sectionColor_Education } from './Education.jsx';
import { sectionColor as sectionColor_Leisure, textColor } from './Leisure.jsx';

const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: ${navBarWidth};
  height: 100%;
  z-index: 1;
  font-family: "Courier New", serif;
  font-size: 20px;
  position: relative;
`;

const WorkLink = styled(Link)`
  grid-row: 1;
  background-color: ${sectionColor_Work};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const EducationLink = styled(Link)`
  grid-row: 2/5;
  background-color: ${sectionColor_Education};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const LeisureLink = styled(Link)`
  grid-row: 5/6;
  background-image: url(${leisureImg});
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default class LeftNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <WorkLink to="/work">WORK</WorkLink>
          <EducationLink to="/education">EDU</EducationLink>
          <LeisureLink to="/leisure"><mark>FUN<br/>icon</mark></LeisureLink>
      </NavigationContainer>        
    )
  }
};
