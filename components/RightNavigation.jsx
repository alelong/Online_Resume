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

const WorkLink = styled(Link)`
  grid-row: 1;
  background-color: ${sectionColor_Work};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const EducationLink = styled(Link)`
  grid-row: 2/5;
  background-color: ${sectionColor_Education};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const LeisureLink = styled(Link)`
  grid-row: 5/6;
  background-image: url(${leisureImg});
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

export default class RightNavigation extends Component {
  render () {
    return (
      <React.Fragment>
        <WorkLink to={this.props.toWork}>WORK</WorkLink>
        <EducationLink to={this.props.toEducation}>EDUCATION</EducationLink>
        <LeisureLink to={this.props.toLeisure}><mark style={{backgroundColor: 'white', color: '#513E4D'}}>OFFLINE</mark></LeisureLink>
      </React.Fragment>        
    )
  }
};
