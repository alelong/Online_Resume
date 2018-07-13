import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';


const ThisSectionWrapper = styled(Wrapper)`
color: #ce88a2;
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
background-color: #ce88a2;
color: white;
border: 0;
`

const ThisSectionTile6 = styled(Tile6)`
`

export default class Organizations_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile6>
            <Section_Text_Module title="L'Entraide Francaise, New York">
              <p>Social media lead</p>
            </Section_Text_Module>
          </ThisSectionTile6>
          <ThisSectionTile5>
            <h1>Clubs and Charities</h1>
          </ThisSectionTile5>
          <ThisSectionTile4>
            <Section_Text_Module title="Free Code Camp, New York">
              <p>Student and Donator</p>
            </Section_Text_Module>
          </ThisSectionTile4>
          <ThisSectionTile3>
          </ThisSectionTile3>
          <ThisSectionTile2>
            <Section_Text_Module title="BZH New York">
              <p>Newsletter Administrator</p>
            </Section_Text_Module>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <Section_Text_Module title="Telecom ParisTech Alumni, Paris">
              <p>Donator</p>
            </Section_Text_Module>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};
