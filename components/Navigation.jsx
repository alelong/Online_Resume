import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 10%;
`;

const NavigationItem = styled.div`
  border: none;
  width: 14.29%;
  height: 100%;
`;

const HomeLink = NavigationItem.withComponent(Link).extend`
  background-color: white;
  color: black;
`;

const WorkLink = NavigationItem.withComponent(Link).extend`
  background-color: #6d5b97;
  color: white;
`;

const AboutLink = NavigationItem.withComponent(Link).extend`
  background-color: #899BB1;
  color: white;
`;

const SkillsLink = NavigationItem.withComponent(Link).extend`
  background-color: #d3a29b;
  color: white;
`;

const EducationLink = NavigationItem.withComponent(Link).extend`
  background-color: #c37572;
  color: white;
`;

const OrgaLink = NavigationItem.withComponent(Link).extend`
  background-color: #ce88a2;
  color: white;
`;

const LeisureLink = NavigationItem.withComponent(Link).extend`
  background-color: #cdb092;
  color: white;
`;

export default class Navigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <HomeLink to="/">Home</HomeLink>
          <WorkLink to="/work">Work Experience</WorkLink>
          <AboutLink to="/about">About</AboutLink>
          <SkillsLink to="/skills">Skills</SkillsLink>
          <EducationLink to="/education">Education</EducationLink>
          <OrgaLink to="/organizations">Organizations</OrgaLink>
          <LeisureLink to="/leisure">Leisure</LeisureLink>
      </NavigationContainer>        
    )
  }
};
