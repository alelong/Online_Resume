import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

var leisureImg = require('../img/leisure.jpg');
var skillsImg = require('../img/skills.jpg');

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

const WorkTile = styled.div`
  grid-column: 3/6;
  grid-row: 1;
  background-color: #6d5b97;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const SkillsTile = styled.div`
  grid-column: 1/5;
  grid-row: 1/3;
  background-image: url(${skillsImg});
  background-attachment: fixed;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const EducationTile = styled.div`
  grid-column: 1/6;
  grid-row: 2/4;
  background-color: #c37572;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const OrgaTile = styled.div`
  grid-column: 1/3;
  grid-row: 4/5;
  background-color: #d3a29b;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const LeisureTile = styled.div`
  grid-column: 1/6;
  grid-row: 1/5;
  background-image: url(${leisureImg});
  background-attachment: fixed;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
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
        <h1>Agathe Lelong.</h1>
        <LeisureLink to="/leisure">
          <span>HOBBIES</span>
        </LeisureLink>
        <OrgaLink to="/organizations">
          <span>ORGANIZATIONS</span>
        </OrgaLink>
        <EducationLink to="/education">
          <span>EDUCATION</span>
        </EducationLink>
        <SkillsLink to="/skills">
            <span>SKILLS</span>
        </SkillsLink>
        <WorkLink to="/work">
          <span>WORK EXPERIENCE</span>  
        </WorkLink>
      </Wrapper>
    </div>        
    )
  }
};

