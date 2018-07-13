import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../index.less';

var leisureImg = require('../img/sand.jpg');
var aboutImg = require('../img/Agathe_Lelong.jpg');


const ThisSectionWrapper = styled(Wrapper)`
`;

const WorkLink = Tile1.withComponent(Link).extend`
  background-color: #6d5b97;
  border: none;
  color: white;
`;

const AboutLink = Tile2.withComponent(Link).extend`
  background-image: url(${aboutImg});
  background-attachment: fixed;
  background-position-y: -50px;
  background-repeat: no-repeat;
  border: none;
  color: white;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      background-size: cover;
    }
  }
`;

const SkillsLink = Tile3.withComponent(Link).extend`
  background-color: #d3a29b;
  border: none;
  color: white;
`;

const EducationLink = Tile4.withComponent(Link).extend`
  background-color: #c37572;
  border: none;
  color: white;
`;

const OrgaLink = Tile5.withComponent(Link).extend`
  background-color: #ce88a2;
  border: none;
  color: white;
`;

const LeisureLink = Tile6.withComponent(Link).extend`
  background-image: url(${leisureImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  color: white;
`;


export default class Home extends Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
    <div className="home">
      <ThisSectionWrapper>
          <LeisureLink to="/leisure">
            <span>Hobbies</span>
          </LeisureLink>
          <OrgaLink to="/organizations">
            <span>Clubs & Charities</span>
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
            <span>Work Experience</span>
          </WorkLink>
          <h1>Agathe Lelong</h1>
      </ThisSectionWrapper>
    </div>        
    )
  }
};

