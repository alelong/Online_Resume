import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

var workImg = require('../img/work.jpg');

export const ThisSectionWrapper = styled(Wrapper)`
  color: #6d5b97;
`;

const ThisSectionTile1 = styled(Tile1)`
  background-color: #6d5b97;
  color: white;
  border:0;
`;

const ThisSectionTile2 = styled(Tile2)`
`;

const ThisSectionTile3 = styled(Tile3)`
`;

export const ThisSectionTile4 = styled(Tile4)`
border-left:0;
`;

export const ThisSectionTile5 = styled(Tile5)`
`;

export const ThisSectionTile6 = styled(Tile6)`
`;

export default class Work_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile4>
            <Section_Text_Module title="Digital Marketing Associate">
              <p style={{fontStyle: 'italic'}}> Parfums Givenchy, Paris <br/> July 2015 - December 2015 </p>
              <p>Supported content creation and publication effort for social media, delivered social performance analyses</p>
              <p style={{fontStyle: 'italic'}}> Clarins USA, NYC <br/> January 2016 - June 2016</p>
              <p>Supported e-commerce merchandizing and email campaigns creation, delivered e-business performance analyses</p>
            </Section_Text_Module>
          </ThisSectionTile4>
          <ThisSectionTile5> 
            <Section_Text_Module title="E-commerce QA Lead">
              <p style={{fontStyle: 'italic'}}> Fast-growing lifestyle e-shop (through Amaris Corporation), NYC <br/> October 2016 - January 2017 </p>
              <p>Managed an end-to-end QA cycle to allow for an e-commerce platform migration</p>
            </Section_Text_Module>
          </ThisSectionTile5>
          <ThisSectionTile6>
            <Section_Text_Module title="E-commerce Business Analyst">
              <p style={{fontStyle: 'italic'}}> French luxury fragrance brand (through Amaris Corporation), NYC <br/> July 2016 - October 2016 </p>
              <p>Documented systems architecture, designed full UX for key functionalities in preparation for an e-commerce platform migration</p>
            </Section_Text_Module>
          </ThisSectionTile6>
          <ThisSectionTile3>
          </ThisSectionTile3>
          <ThisSectionTile2> 
            <Section_Text_Module title="E-commerce Technical Project Manager">
              <p style={{fontStyle: 'italic'}}> Top French luxury house (through Amaris Corporation), NYC <br/> February 2017 - June 2018 </p>
              <p> - Lead new features development, testing and rollout on the US e-commerce website
              <br/> - Ensured L1 support for the run of the e-commerce site
              <br/> - Developed content pages </p>
            </Section_Text_Module>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <h1>Work Experience</h1>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};