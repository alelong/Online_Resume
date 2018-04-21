import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeTile from './HomeTile.jsx';

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 6fr 3fr 7fr;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) { 
       height: 1334px;
  }
`;

const WorkTile = styled.a`
  grid-column: 3/6;
  grid-row: 1;
  background-color: #b27572;
`;

const SkillsTile = styled.a`
  grid-column: 1/4;
  grid-row: 1/3;
  background-color: #6d5b97;
`;

const EducationTile = styled.a`
  grid-column: 1/6;
  grid-row: 2/4;
  background-color: #d3a29b;
`;

const OrgaTile = styled.a`
  grid-column: 1/3;
  grid-row: 4/5;
  background-color: #ce88a2;
`;

const LeisureTile = styled.a`
  grid-column: 1/6;
  grid-row: 1/5;
  background-color: #e3bda8;
`;

const WorkLink = WorkTile.withComponent(Link);
const SkillsLink = SkillsTile.withComponent(Link);
const EducationLink = EducationTile.withComponent(Link);
const OrgaLink = OrgaTile.withComponent(Link);
const LeisureLink = LeisureTile.withComponent(Link);

export default class Home extends Component {
  render () {
    return (
    <div className="home">
      <Wrapper>
        <h1>This is Agathe.</h1>
        <LeisureLink to="/leisure">
          Leisure
        </LeisureLink>
        <OrgaLink to="/organizations">
          Organizations
        </OrgaLink>
        <EducationLink to="/education">
          Education
        </EducationLink>
        <SkillsLink to="/skills">
            Skills
        </SkillsLink>
        <WorkLink to="/work">
          Work Experience
        </WorkLink>
      </Wrapper>
    </div>        
    )
  }
};

