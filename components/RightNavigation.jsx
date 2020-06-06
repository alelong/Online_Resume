import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//var leisureNavImg = require('../img/Leisure_Navigation.jpg');
//var leisureImg = require('../img/sand.jpg');

//TODO: dynamically calculate width of nav bar given bodyWidth (tried on 4/25 but failed)
//import bodyWidth from './Skeleton.jsx';
//var navBarWidth = '6%';
//var borderStyle = 'solid 2px';

import { sectionColor as sectionColor_Work } from './Work.jsx';
import { sectionColor as sectionColor_Education } from './Education.jsx';
import { sectionColor as sectionColor_Leisure, textColor } from './Leisure.jsx';
import { navBarWidth_desktop, navBarWidth_mobile, borderStyle, borderWidth, borderColor } from './Skeleton.jsx';

const NavigationContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: ${navBarWidth_desktop};
  height: 100%;
  z-index: 1;
  font-family: "Courier New", serif;
  position: relative;
  a {
    border-bottom-style: ${borderStyle};
    border-bottom-width: ${borderWidth};
    border-bottom-color: ${borderColor};
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      display: none;
      width: ${navBarWidth_mobile};
      grid-template-rows: 1fr 1fr 1fr 0.33fr 1fr 1fr;
  }
`;

const WorkLink = styled(Link)`
  grid-row: 1;
  background-color: ${sectionColor_Work};
  background-image: url(../img/Work.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  writing-mode: vertical-rl;
  text-orientation: upright;
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  border-top-color: ${borderColor};
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 1/3;
  }
`;

const EducationLink = styled(Link)`
  grid-row: 2/5;
  background-color: ${sectionColor_Education};
  background-image: url(../img/Education.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 3/5;
  }
`;

const LeisureLink = styled(Link)`
  grid-row: 5/6;
  background-image: url(../img/Leisure.png), url(../img/sand.jpg);
  background-attachment: scroll, fixed;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
  background-position-y: center;
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: overline;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-row: 5/7;
  }
`;

export default class RightNavigation extends Component {
  render () {
    let lang = this.props.copyLang;
    let workSectionTitle = (lang == 'FR') ? 'PRO' : 'WORK' ;
    let educationSectionTitle = (lang == 'FR') ? 'ETUDES' : 'EDUCATION';
    let leisureSectionTitle = (lang == 'FR') ? 'LOISIRS' : 'OFFLINE';
    return (
      <NavigationContainer>
        <WorkLink to={this.props.link_one}/>
        <EducationLink to={this.props.link_two}/>
        <LeisureLink to={this.props.link_three}/>
      </NavigationContainer>
    )
  }
};
