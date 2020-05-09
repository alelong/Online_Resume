import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, IDPhotoTile} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

//import statement to insert in App.jsx: import {HomeTile1, HomeTile2, HomeTile3, HomeTile4, HomeTile5, HomeTile6} from './HomeTiles.jsx';

var leisureImg = require('../img/sand.jpg');
var aboutImg = require('../img/Agathe_Lelong.jpg');
var paddingLeftValue = '3%';

import { sectionColor as sectionColor_About } from './About.jsx';
import { sectionColor as sectionColor_Work } from './Work.jsx';
import { sectionColor as sectionColor_Skills } from './Skills.jsx';
import { sectionColor as sectionColor_Education } from './Education.jsx';
import { sectionColor as sectionColor_Organizations } from './Organizations.jsx';
import { sectionColor as sectionColor_Leisure } from './Leisure.jsx';

import {
  Title_1_FR, Title_1_EN,
  Title_2_FR, Title_2_EN,
  Title_3_FR, Title_3_EN,
  Title_4_FR, Title_4_EN,
  Title_5_FR, Title_5_EN,
  Title_6_FR, Title_6_EN,
} from '../copy/Home_Copy.jsx';

const HomeTile1Container = Tile1.withComponent(Link).extend`
  background-color: ${sectionColor_Work};
  border: none;
  color: white;
  padding-left: ${paddingLeftValue};
  `;

const HomeTile2Container = Tile2.withComponent(Link).extend`
  background-image: url(../img/DSCF7939_bis_copy.jpg);
  //background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  //background-position-y: -80px;
  color: ${sectionColor_About};
  //color: white;
  border: none;
  padding-left: ${paddingLeftValue};
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      background-size: cover;
    }
  }
  `;

const HomeTile3Container = Tile3.withComponent(Link).extend`
  background-color: ${sectionColor_Skills};
  border: none;
  color: white;
  cursor: pointer;
  padding-left: ${paddingLeftValue};
  `;

const HomeTile4Container = Tile4.withComponent(Link).extend`
  background-color: ${sectionColor_Education};
  border: none;
  color: white;
  padding-left: ${paddingLeftValue};
  `;

const HomeTile5Container = Tile5.withComponent(Link).extend`
  background-color: ${sectionColor_Organizations};
  border: none;
  color: white;
  padding-left: ${paddingLeftValue};
  `;

const HomeTile6Container = Tile6.withComponent(Link).extend`
  background-image: url(../img/sand.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  //background-color: white;
  border: none;
  padding-left: ${paddingLeftValue};
  //color: white;
  `;

const WorkTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={1000}/>
        <span>{text}</span>
    </Typing>
  )

const AboutTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={500}/>
        <span>{text}</span>
    </Typing>
  )

const SkillsTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={1500}/>
        <span>{text}</span>
    </Typing>
  )

const EducationTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={2000}/>
        <span>{text}</span>
    </Typing>
  )

const ClubsTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={2500}/>
        <span>{text}</span>
    </Typing>
  )

const LeisureTypedTile = ({text}) => (
    <Typing speed={100}>
      <Typing.Delay ms={3000}/>
        <span><mark style={{backgroundColor: 'white', color: '#513E4D'}}>{text}</mark></span>
    </Typing>
  )

export class HomeTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let link = this.props.target;
    return (
      <HomeTile1Container to={link}>
        <WorkTypedTile text = {Title_1}/>
      </HomeTile1Container>
    )
  }
};

export class HomeTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let link = this.props.target;
    return (
        <HomeTile2Container to={link}>
          
        </HomeTile2Container>
    )
  }
};

export class HomeTile3 extends Component {
  constructor(props){
    super(props);
  }

  render () {
    let lang = this.props.copyLang;
    let Title_3 = (lang == 'FR') ? Title_3_FR : Title_3_EN;
    let link = this.props.target;
    return (
      <HomeTile3Container to={link}>
        <SkillsTypedTile text = {Title_3}/>
      </HomeTile3Container>
    )
  }
};

export class HomeTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let link = this.props.target;
    return (
      <HomeTile4Container to={link}>
        <EducationTypedTile text = {Title_4}/>
      </HomeTile4Container>
    )
  }
};

export class HomeTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let link = this.props.target;
    return (
      <HomeTile5Container to={link}>
        <ClubsTypedTile text = {Title_5}/>
      </HomeTile5Container>
    )
  }
};

export class HomeTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let link = this.props.target;
    return (
      <HomeTile6Container to={link}>
        <LeisureTypedTile text = {Title_6}/>
      </HomeTile6Container>
    )
  }
};
