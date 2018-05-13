import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

var leisureImg = require('../img/sand.jpg');
var aboutImg = require('../img/Agathe_Lelong.jpg');

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  font-size: 24px;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) { 
       height: 1334px;
  }
`;

const WorkTile = styled.div`
  grid-column: 4/7;
  grid-row: 1;
  background-color: #6d5b97;
  position: relative;
  color: white;
  font-size:24px;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
  transition: all 2s ease-in-out;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
`;

const AboutTile = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  background-image: url(${aboutImg});
  background-attachment: fixed;
  background-position-y: -50px;
  background-repeat: no-repeat;
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-start;
  span{
    align-self: flex-end;
  }
`;

const SkillsTile = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  background-color: #d3a29b;
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-start;
  span{
    align-self: flex-end;
  }
`;

const EducationTile = styled.div`
  grid-column: 6/7;
  grid-row: 2/5;
  background-color: #c37572;
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const OrgaTile = styled.div`
  grid-column: 1/5;
  grid-row: 5/6;
  background-color: #ce88a2;
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-start;
  span{
    align-self: flex-end;
  }
`;

const LeisureTile = styled.div`
  grid-column: 5/7;
  grid-row: 5/6;
  background-image: url(${leisureImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
`;

const WorkLink = WorkTile.withComponent(Link);
const AboutLink = AboutTile.withComponent(Link);
const SkillsLink = SkillsTile.withComponent(Link);
const EducationLink = EducationTile.withComponent(Link);
const OrgaLink = OrgaTile.withComponent(Link);
const LeisureLink = LeisureTile.withComponent(Link);

export default class Home extends Component {
  render () {
    return (
    <div className="home">
      <Wrapper>
        <LeisureLink to="/leisure">
          <span>Hobbies</span>
        </LeisureLink>
        <OrgaLink to="/organizations">
          <span>Clubs and Charities</span>
        </OrgaLink>
        <EducationLink to="/education">
          <span>Education</span>
        </EducationLink>
        <SkillsLink to="/skills">
            <span>Skills</span>
        </SkillsLink>
        <AboutLink to="/about">
          <span>About</span>  
        </AboutLink>
        <WorkLink to="/work">
          <h1>Agathe Lelong</h1>
          <span>Work Experience</span>
        </WorkLink>
      </Wrapper>
    </div>        
    )
  }
};

