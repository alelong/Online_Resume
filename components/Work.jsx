import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module, { Content } from './SectionTextModule.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

const Wrapper = styled.div`
  //background-color: #123456;
`;

export default class Work_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <Wrapper className="section_content">
        <Section_Head name="Work Experience"/>
        <Section_Text_Module title="Technical Project Manager">
          <p style={{fontStyle: 'italic'}}> Leading French luxury house - through Amaris Corporation </p>
          <p> Coordinating new features development on the US e-commerce website (projects involving Frontend, Backend and Hybris development, 3rd party integrations) </p>
        </Section_Text_Module>
        <Section_Text_Module title="QA Lead">
          <p style={{fontStyle: 'italic'}}> LA and NYC-based lifestyle blog - through Amaris Corporation </p>
          <p> Managing full QA cycle for an e-commerce platform migration </p>
        </Section_Text_Module>
        <Section_Text_Module title="E-commerce Business Analyst">
          <p style={{fontStyle: 'italic'}}> NYC-based French luxury fragrance brand - through Amaris Corporation </p>
          <p> In the context of an e-commerce migration, I helped a brand to define functional and technical requirements for their new e-commerce platform.</p>
        </Section_Text_Module>     
        <Section_Text_Module title="Ecommerce and CRM Associate">
          <p style={{fontStyle: 'italic'}}> Clarins USA </p>
          <p> TODO </p>
        </Section_Text_Module>
        <Section_Text_Module title="Digital Marketing Associate">
          <p style={{fontStyle: 'italic'}}> Parfums Givenchy </p>
          <p> TODO </p>
        </Section_Text_Module>
        <Navigation/>
      </Wrapper>
    )
  }
};
