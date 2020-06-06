import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Work } from './Work.jsx';
import { navBarWidth_desktop, navBarWidth_mobile } from './Skeleton.jsx';
import MobileNavigation from './MobileNavigation.jsx';

const HomepageLink = styled(Link)`
  width: ${navBarWidth_desktop};
  height: 100%;
  background-image: url(../img/homepage_icon.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  :hover{
    background-image: url(../img/homepage_icon_open_6.png);
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      display: none;
  }
`;

const NameLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default class Header extends Component {
  render () {
    return (
      <React.Fragment>
        <HomepageLink to={this.props.link_home}/>
        <NameLink to={this.props.link_home}>Agathe Lelong</NameLink>
      </React.Fragment>
    )
  }
};