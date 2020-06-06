import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const bodyWidth_desktop = '88%' ;
export const navBarWidth_desktop = '6%';
export const headerHeight_desktop = '8%';
export const topMenuHeight_desktop = '6%';
export const bodyWidth_mobile = '100%' ;
export const navBarWidth_mobile = '12%';
export const headerHeight_mobile = '6%';
//export const topMenuHeight_mobile = '4%';

export const borderStyle = 'solid';
export const borderWidth = '5px';
export const borderColor = 'white';


export const Wrapper = styled.div`
  position: relative;
  width: ${bodyWidth_desktop};
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 1fr 6fr 3fr 6fr 1fr;
  font-family: "Courier New", serif;
  cursor: auto;
  overflow: hidden;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-style: ${borderStyle};
    border-width: ${borderWidth};
    border-color: ${borderColor};
  }
  div > div {
    border: none;
    width: 98%;
    align-self: center;
  }
  h1 {
    margin: 0;
    font-size: 4vmin;
    font-weight: normal;
    overflow: hidden;
  }
  a{
    text-decoration-line: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-style: ${borderStyle};
    border-width: ${borderWidth};
    border-color: ${borderColor};
  }
  a > div {
    border: none;
  }
  span{
    font-size: 4vmin;
    overflow: hidden;
  }
  div > h2 {
    margin: 0;
    font-size: 2.5vmin;
    font-weight: bold;
    overflow: hidden;
    border: none;
    text-decoration: none;
  }
  div > h2 > div {
    border: none;
  }
  div > div > p {
    font-size: 1.8vmin;
    overflow: hidden;

  }
  div > div > p > a {
    all: unset;
    cursor: pointer; 
    color: inherit;
    text-decoration: underline;
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: ${bodyWidth_mobile};
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 0.33fr 1fr 1fr;
      border-top: none !important;
  }
`;

export const Tile1 = styled.div`
  grid-column: 5/7;
  grid-row: 1;
  background-color: white;
  position: relative;
  border-left: none !important;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 2;
      border-top: none !important;
      border-right: none !important;
  }
`;

export const Tile2 = styled.div`
  grid-column: 1/5;
  grid-row: 1/4;
  background-color: white;
  position: relative;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 1;
      border-left: none !important;
      border-right: none !important;
      border-top: none !important;
  }
`;

export const Tile3 = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  background-color: white;
  position: relative;
  border-top: none !important;
  justify-content: flex-end !important;
  span, h1 {
    padding-bottom: 5%;
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 4;
      border-left: none !important;
      border-right: none !important;
      justify-content: center !important;
      span, h1 {
        padding-bottom: unset;
      }
  }
`;

export const Tile4 = styled.div`
  grid-column: 6/7;
  grid-row: 2/5;
  background-color: white;
  position: relative;
  border-left: none !important;
  border-top: none !important;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 3;
      border-right: none !important;
  }
`;

export const Tile5 = styled.div`
  grid-column: 1/5;
  grid-row: 5/7;
  background-color: white;
  position: relative;
  border-top: none !important;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 5;
      border-left: none !important;
      border-right: none !important;
  }
`;

export const Tile6 = styled.div`
  grid-column: 5/7;
  grid-row: 5/7;
  background-color: white;
  position: relative;
  border-left: none !important;
  border-top: none !important;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      grid-column: 1;
      grid-row: 6;
      border-right: none !important;
  }
`;

export const Location = ({text}) => (
  <p style={{marginBottom: '0'}}>
    <img src="../img/location.png" style={{height: '1.8vmin'}}/>&nbsp;
    {text}
  </p>
);

export const Timeframe = ({text}) => (
  <p style={{marginBottom: '0'}}>
    <img src="../img/timeframe.png" style={{height: '1.8vmin'}}/>&nbsp;
    {text}
  </p>
);

export const LangLevel = styled.img`
  width: 10vmin;
  margin: auto;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: 15vmin;
  }
`;