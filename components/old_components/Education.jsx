import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';


const ThisSectionWrapper = styled(Wrapper)`
color: #c37572;
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
background-color: #c37572;
color: white;
border: 0;
`

const ThisSectionTile5 = styled(Tile5)`
`

const ThisSectionTile6 = styled(Tile6)`
`

export default class Education_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile6>
            <Section_Text_Module title="Lycee Naval, Brest, France">
              <p>High School, Scientific curriculum</p>
            </Section_Text_Module>
          </ThisSectionTile6>
          <ThisSectionTile5>
            <Section_Text_Module title="Lycee Louis Le Grand, Paris, France">
              <p>Classe Preparatoire Scientifique MPSI, MP*</p>
            </Section_Text_Module>
          </ThisSectionTile5>
          <ThisSectionTile4>
            <h1>Education</h1>
          </ThisSectionTile4>
          <ThisSectionTile3>
          </ThisSectionTile3>
          <ThisSectionTile2>
            <Section_Text_Module title="Telecom ParisTech, Paris, France">
              <p>Masters Degree in Computer Science, Class of 2015</p>
            </Section_Text_Module>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <Section_Text_Module title="HEC Paris, France">
              <p>Management and New Technologies, Class of 2015</p>
            </Section_Text_Module>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};
