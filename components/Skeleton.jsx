import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

export const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  font-size: 24px;
  div > div > p {
    font-size: 16px;
  }
  h1 {
    margin:0;
    font-size: 24px;
    font-weight: normal;
    text-decoration: underline;
    align-self:flex-end;
  }
  div > h2 {
    margin:0;
    font-size: 18px;
    font-weight: normal;
    text-decoration: underline;
  }
`;

export const Tile1 = styled.div`
  grid-column: 4/7;
  grid-row: 1;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

export const Tile2 = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
`;

export const Tile3 = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
`;

export const Tile4 = styled.div`
  grid-column: 6/7;
  grid-row: 2/5;
  border-left:0;
  border: 1px solid;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

export const Tile5 = styled.div`
  grid-column: 1/5;
  grid-row: 5/6;
  border: 1px solid;
  border-top: 0;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
`;

export const Tile6 = styled.div`
  grid-column: 5/7;
  grid-row: 5/6;
  border: 1px solid;
  border-top: 0;
  border-left: 0;
  border-collapse: collapse;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

