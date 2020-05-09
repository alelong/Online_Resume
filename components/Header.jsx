import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Work } from './Work.jsx';
import {navBarWidth} from './LeftNavigation.jsx';

/*const HeaderContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white ;
  color: ${sectionColor_About} ;
  font-family: "Courier New", serif;
  font-size: 30px;
  border-bottom: solid 2px;
`;*/

const HomepageLink = styled(Link)`
  width: ${navBarWidth};
  height: 100%;
  background-image: url(../img/homepage_icon.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
`;

/*const LangSelector = styled.div`
  width: ${navBarWidth};
  background-color: ${sectionColor_About} ;
  color: white;
  font-size: 15px;
`;*/

export default class Header extends Component {
  render () {
    return (
      <React.Fragment>
        <HomepageLink to={this.props.link_home}/>
        <div>Agathe Lelong</div>
      </React.Fragment>
    )
  }
};