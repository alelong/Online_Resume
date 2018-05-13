import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

var aboutImg = require('../img/Agathe_Lelong.jpg');

const ThisSectionWrapper = styled(Wrapper)`
  color:  #790c2e;
`

const ThisSectionTile1 = styled(Tile1)`
  border-left:0;
  border-bottom:0;
`

const ThisSectionTile2 = styled(Tile2)`
  background-image: url(${aboutImg});
  background-attachment: fixed;
  background-position-y: -50px;
  background-repeat: no-repeat;
  color: white;
  border: 0;
`

const ThisSectionTile3 = styled(Tile3)`
`

const ThisSectionTile4 = styled(Tile4)`
  border-left:0;
`

const ThisSectionTile5 = styled(Tile5)`
`

const ThisSectionTile6 = styled(Tile6)`
`

export default class About_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile6>
            <Section_Text_Module title="Current occupation">
              <p>E-Commerce Consultant at Amaris Consulting</p>
            </Section_Text_Module>
          </ThisSectionTile6>
          <ThisSectionTile5>
            <Section_Text_Module title="ID">
              <p>Born and raised in Brittany, France ; born in 1992</p>
            </Section_Text_Module>
          </ThisSectionTile5>
          <ThisSectionTile4>
            <Section_Text_Module title="Wannabee Web Developer">
              <p>This is my online resume and React.js playground</p>
            </Section_Text_Module>
          </ThisSectionTile4>
          <ThisSectionTile3>
          </ThisSectionTile3>
          <ThisSectionTile2>
            <h1>About</h1>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <Section_Text_Module title="Contact">
              <p>I am reachable via email, LinkedIn, Facebook or Instagram. Take your pick!</p>
            </Section_Text_Module>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};
