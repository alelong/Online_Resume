import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  width: 100%;
  height: 5%;
  z-index:1;
  font-family: "Georgia", serif;
  font-size: 26px;
  span {
    font-size: 10px
  }
`;

const HomeLink = styled(Link)`
  background-color: #000000;
  color: #ffffff;
  text-decoration: none;
`;

export default class TopNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
          <HomeLink to="/">H<span>OME</span></HomeLink>
      </NavigationContainer>
    )
  }
};
