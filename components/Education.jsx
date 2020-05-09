import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Text_Module from './SectionTextModule.jsx';
import {Wrapper, Tile1, Tile2, Tile3, Tile4, Tile5, Tile6} from './Skeleton.jsx';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
//IMPORT statement to insert in App.jsx below:
//import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './EducationTiles.jsx';

export const sectionColor = '#c37572';
//export const sectionColor = '#111c2f';

//EN Copy
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
} from '../copy/Education_Copy.jsx';

const EducationTile1Container = styled(Tile1)`
  color: ${sectionColor};
  border-bottom: none;
  `;

const EducationTile2Container = styled(Tile2)`
  color: ${sectionColor};
  `;

const EducationTile3Container = styled(Tile3)`
  background-color: ${sectionColor};
  color: ${sectionColor};
  `;

const EducationTile4Container = styled(Tile4)`
  background-color: ${sectionColor};
  color: white;
  border: none;
  `;

const EducationTile5Container = styled(Tile5)`
  color: ${sectionColor};
  `;

const EducationTile6Container = styled(Tile6)`
  color: ${sectionColor};
  `;

const TypedTile = ({title, paragraph}) => (
    <Typing speed={50}>
      <h1>{title}</h1>
      <span>{paragraph}</span>
    </Typing>
  )

export class EducationTile1 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_1 = (lang == 'FR') ? Title_1_FR : Title_1_EN;
    let Paragraph_1 = (lang == 'FR') ? Paragraph_1_FR : Paragraph_1_EN;
    return (
      <EducationTile1Container>
        <Section_Text_Module title={Title_1}>
          <p>{Paragraph_1}</p>
        </Section_Text_Module>
      </EducationTile1Container>
    )
  }
};

export class EducationTile2 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_2 = (lang == 'FR') ? Title_2_FR : Title_2_EN;
    let Paragraph_2 = (lang == 'FR') ? Paragraph_2_FR : Paragraph_2_EN;
    return (
      <EducationTile2Container>
        <Section_Text_Module title={Title_2}>
          <p>{Paragraph_2}</p>
        </Section_Text_Module>
      </EducationTile2Container>
    )
  }
};

export class EducationTile3 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <EducationTile3Container/>
    )
  }
};

export class EducationTile4 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_4 = (lang == 'FR') ? Title_4_FR : Title_4_EN;
    let Paragraph_4 = (lang == 'FR') ? Paragraph_4_FR : Paragraph_4_EN;
    return (
      <EducationTile4Container>
        <TypedTile title={Title_4} paragraph={Paragraph_4}/>
      </EducationTile4Container>
    )
  }
};

export class EducationTile5 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_5 = (lang == 'FR') ? Title_5_FR : Title_5_EN;
    let Paragraph_5 = (lang == 'FR') ? Paragraph_5_FR : Paragraph_5_EN;
    return (
      <EducationTile5Container>
        <Section_Text_Module title={Title_5}>
          <p>{Paragraph_5}</p>
        </Section_Text_Module>
      </EducationTile5Container>
    )
  }
};

export class EducationTile6 extends Component {
  constructor(props){
    super(props);
  }
  render () {
    let lang = this.props.copyLang;
    let Title_6 = (lang == 'FR') ? Title_6_FR : Title_6_EN;
    let Paragraph_6 = (lang == 'FR') ? Paragraph_6_FR : Paragraph_6_EN;
    return (
      <EducationTile6Container>
        <Section_Text_Module title={Title_6}>
          <p>{Paragraph_6}</p>
        </Section_Text_Module>
      </EducationTile6Container>
    )
  }
};