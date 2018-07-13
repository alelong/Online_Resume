import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Wrapper = styled.div`
  position:relative;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 1fr 6fr 3fr 6fr 1fr;
  font-family: "Georgia", serif;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    margin:0;
    font-size: 36px;
    font-weight: normal;
  }
  a{
    text-decoration-line: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  span{
    font-size: 36px;
  }
  div > h2 {
    margin:0;
    font-size: 18px;
    font-weight: normal;
  }
  div > div > p {
    font-size: 16px;
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      height:150vh;
      span, h1, div > h2 {
        font-size: 90px;
      }

  }
`;

export const Tile1 = styled.div`
  grid-column: 4/7;
  grid-row: 1;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  border-left: none;
  border-bottom: none;
`;

export const Tile2 = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
`;

export const Tile3 = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  border-bottom: none;
  justify-content: flex-end;
  cursor: auto;
  span, h1 {
    position: absolute;
    bottom: 10%;
  }
`;

export const Tile4 = styled.div`
  grid-column: 6/7;
  grid-row: 2/5;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  border-left: none;
  border-bottom: none;
`;

export const Tile5 = styled.div`
  grid-column: 1/5;
  grid-row: 5/7;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  border-right: none;
`;

export const Tile6 = styled.div`
  grid-column: 5/7;
  grid-row: 5/7;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
`;

