import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';


const WorkTile1Container = styled(Tile1)`
  background-color: #6d5b97;
  color: white;
  border:0;
  `;

const WorkTile2Container = styled(Tile2)`
  color: #6d5b97;
  `;

const WorkTile3Container = styled(Tile3)`
  background-color: #6d5b97;
  opacity: 75%;
  color: #6d5b97;
  `;

const WorkTile4Container = styled(Tile4)`
  color: #6d5b97;
  `;

const WorkTile5Container = styled(Tile5)`
  color: #6d5b97;
  `;

const WorkTile6Container = styled(Tile6)`
  color: #6d5b97;
  `;

const TypedTile = () => (
    <Typing speed={50}>
      <h1>My work experiences.</h1>
      <span>From Digital Marketing and e-commerce project management... to web development!</span>
    </Typing>
  )

export class WorkTile1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTitleTile: true
    }
  }
  render () {
    return (
      <WorkTile1Container>
        <TypedTile/>
      </WorkTile1Container>
    )
  }
};

export class WorkTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile2Container>
        <Section_Text_Module title="E-commerce Technical Project Manager">
          <p style={{fontStyle: 'italic'}}> Top French luxury house (through Amaris Corporation), NYC <br/> February 2017 - June 2018 </p>
          <p> - Lead new features development, testing and rollout on the US e-commerce website
          <br/> - Ensured L1 support for the run of the e-commerce site
          <br/> - Developed content pages </p>
        </Section_Text_Module>
      </WorkTile2Container>
    )
  }
};

export class WorkTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile3Container/>
    )
  }
};

export class WorkTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile4Container>
        <Section_Text_Module title="Digital Marketing Associate">
          <p style={{fontStyle: 'italic'}}> Parfums Givenchy, Paris <br/> July 2015 - December 2015 </p>
          <p>Supported content creation and publication effort for social media, delivered social performance analyses</p>
          <p style={{fontStyle: 'italic'}}> Clarins USA, NYC <br/> January 2016 - June 2016</p>
          <p>Supported e-commerce merchandizing and email campaigns creation, delivered e-business performance analyses</p>
        </Section_Text_Module>
      </WorkTile4Container>
    )
  }
};

export class WorkTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile5Container>
        <Section_Text_Module title="E-commerce QA Lead">
          <p style={{fontStyle: 'italic'}}> Fast-growing lifestyle e-shop (through Amaris Corporation), NYC <br/> October 2016 - January 2017 </p>
          <p>Managed an end-to-end QA cycle to allow for an e-commerce platform migration</p>
        </Section_Text_Module>
      </WorkTile5Container>
    )
  }
};

export class WorkTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <WorkTile6Container>
        <Section_Text_Module title="E-commerce Business Analyst">
          <p style={{fontStyle: 'italic'}}> French luxury fragrance brand (through Amaris Corporation), NYC <br/> July 2016 - October 2016 </p>
          <p>Documented systems architecture, designed full UX for key functionalities in preparation for an e-commerce platform migration</p>
        </Section_Text_Module>
      </WorkTile6Container>
    )
  }
};