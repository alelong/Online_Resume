import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {OrganizationsTile1, OrganizationsTile2, OrganizationsTile3, OrganizationsTile4, OrganizationsTile5, OrganizationsTile6} from './OrganizationsTiles.jsx';

export const sectionColor = '#84A5B0';
//export const sectionColor = '#ce88a2';

//Copy
import { 
  Title_1_FR, 
  Title_2_FR, 
  Title_3_FR,
  Title_4_FR, 
  Title_5_FR, 
  Title_6_FR,
  Paragraph_1_FR, 
  Paragraph_2_FR, 
  Paragraph_3_FR,
  Paragraph_4_FR, 
  Paragraph_5_FR, 
  Paragraph_6_FR,
  Title_1_EN, 
  Title_2_EN, 
  Title_3_EN,
  Title_4_EN, 
  Title_5_EN, 
  Title_6_EN,
  Paragraph_1_EN, 
  Paragraph_2_EN, 
  Paragraph_3_EN,
  Paragraph_4_EN, 
  Paragraph_5_EN, 
  Paragraph_6_EN,
} from '../copy/Organizations_Copy.jsx';


const OrganizationsTile1Container = styled(Tile1)`
  color: ${sectionColor};
  `;

const OrganizationsTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const OrganizationsTile3Container = styled(Tile3)`
  color: #ce88a2;
  background-color: ${sectionColor};
  `;

const OrganizationsTile4Container = styled(Tile4)`
  color: ${sectionColor};
  `;

const OrganizationsTile5Container = styled(Tile5)`
  background-color: ${sectionColor};
  color: white;
  border: 0;
  `;

const OrganizationsTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = ({text}) => (
  <Typing speed={50}>
    <h1>{text}</h1>
  </Typing>
) 

export class OrganizationsTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Paragraph_1 = (lang == 'FR') ? Paragraph_1_FR : Paragraph_1_EN;
    return (
      <OrganizationsTile1Container>
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
        </Section_Text_Module>
      </OrganizationsTile1Container>
    )
  }
};

export class OrganizationsTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Paragraph_2 = (lang == 'FR') ? Paragraph_2_FR : Paragraph_2_EN;
    return (
      <OrganizationsTile2Container>
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
        </Section_Text_Module>
      </OrganizationsTile2Container>
    )
  }
};

export class OrganizationsTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <OrganizationsTile3Container/>
    )
  }
};

export class OrganizationsTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Paragraph_4 = (lang == 'FR') ? Paragraph_4_FR : Paragraph_4_EN;
    return (
      <OrganizationsTile4Container>
        <Section_Text_Module title={Title_4}>
          <p>{Paragraph_4}</p>
        </Section_Text_Module>
      </OrganizationsTile4Container>
    )
  }
};

export class OrganizationsTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    return (
      <OrganizationsTile5Container>
        <TypedTile text={Title_5}/>
      </OrganizationsTile5Container>
    )
  }
};

export class OrganizationsTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Paragraph_6 = (lang == 'FR') ? Paragraph_6_FR : Paragraph_6_EN;
    return (
      <OrganizationsTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </OrganizationsTile6Container>
    )
  }
};