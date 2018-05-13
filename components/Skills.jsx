import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';


const ThisSectionWrapper = styled(Wrapper)`
color: #d3a29b;
`

const ThisSectionTile1 = styled(Tile1)`
border-left:0;
border-bottom:0;
`

const ThisSectionTile2 = styled(Tile2)`
`

const ThisSectionTile3 = styled(Tile3)`
background-color: #d3a29b;
color: white;
border: 0;
`

const ThisSectionTile4 = styled(Tile4)`
`

const ThisSectionTile5 = styled(Tile5)`
`

const ThisSectionTile6 = styled(Tile6)`
`

export default class Skills_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <ThisSectionWrapper>
          <ThisSectionTile6>
            <Section_Text_Module title="Project Management">
              <p>3/5</p>
            </Section_Text_Module>
          </ThisSectionTile6>
          <ThisSectionTile5>
            <Section_Text_Module title="HTML/CSS">
              <p>5/5</p>
            </Section_Text_Module>
          </ThisSectionTile5>
          <ThisSectionTile4>
            <Section_Text_Module title="Javascript">
              <p>4/5</p>
            </Section_Text_Module>
          </ThisSectionTile4>
          <ThisSectionTile3>
            <h1>Skills</h1>
          </ThisSectionTile3>
          <ThisSectionTile2>
            <Section_Text_Module title="React.js">
              <p>3/5</p>
            </Section_Text_Module>
          </ThisSectionTile2>
          <ThisSectionTile1>
            <Section_Text_Module title="Java">
              <p>2/5</p>
            </Section_Text_Module>
          </ThisSectionTile1>
        </ThisSectionWrapper>
        <Navigation/>
      </div>
    )
  }
};
