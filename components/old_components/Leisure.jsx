import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

var leisureImg = require('../img/sand.jpg');


const ThisSectionWrapper = styled(Wrapper)`
  color: #cdb092;
`

const ThisSectionTile1 = styled(Tile1)`
  border-left:0;
  border-bottom:0;
`

const ThisSectionTile2 = styled(Tile2)`
`

const ThisSectionTile3 = styled(Tile3)`
`

const ThisSectionTile4 = styled(Tile4)`
  border-left:0;
`

const ThisSectionTile5 = styled(Tile5)`
`

const ThisSectionTile6 = styled(Tile6)`
  background-image: url(${leisureImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  border: 0;
`

export default class Leisure_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile6>
            <h1>Hobbies</h1>
          </ThisSectionTile6>
          <ThisSectionTile5>
            <Section_Text_Module title="Drawing and Painting">
              <p>"Artiste du dimanche"</p>
            </Section_Text_Module>
          </ThisSectionTile5>
          <ThisSectionTile4>
            <Section_Text_Module title="Tennis">
              <p>Former competitor</p>
            </Section_Text_Module>
          </ThisSectionTile4>
          <ThisSectionTile3>
          </ThisSectionTile3>
          <ThisSectionTile2>
            <Section_Text_Module title="Surfing">
              <p>Waves and Sea addict</p>
            </Section_Text_Module>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <Section_Text_Module title="Volleyball">
              <p>Player, Zogsports League</p>
            </Section_Text_Module>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};
