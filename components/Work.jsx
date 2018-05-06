import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module, { Content } from './SectionTextModule.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  color: #6d5b97;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) { 
       height: 1334px;
  }
`;

const Work0 = styled.div`
  grid-column: 4/7;
  grid-row: 1;
  position: relative;
  background-color: #6d5b97;
  color: white;
  display: flex;
  justify-content: flex-end;
  h1 {
    align-self: flex-end;
    margin:0;
    font-size: 24px;
    font-weight: normal;
    text-decoration: underline;
  }
`;

const Work1 = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  position: relative;
  border: 1px solid #6d5b97;
  border-collapse: collapse;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    align-self: flex-start;
    margin:0;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  div > p {
    font-size: 16px;
  }
`;

const Work2 = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  position: relative;
  border: 1px solid #6d5b97;
  border-collapse: collapse;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    align-self: flex-start;
    margin:0;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  div > p {
    font-size: 16px;
  }
`;

const Work3 = styled.div`
  grid-column: 6/7;
  grid-row: 2/5;
  border: 1px solid #6d5b97;
  border-left:0;
  border-collapse: collapse;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    align-self: flex-end;
    margin:0;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  div > p {
    font-size: 16px;
  }
`;

const Work4 = styled.div`
  grid-column: 1/5;
  grid-row: 5/6;
  border: 1px solid #6d5b97;
  border-top: 0;
  border-collapse: collapse;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    align-self: flex-start;
    margin:0;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  div > p {
    font-size: 16px;
  }
`;

const Work5 = styled.div`
  grid-column: 5/7;
  grid-row: 5/6;
  position: relative;
  border: 1px solid #6d5b97;
  border-top: 0;
  border-left: 0;
  border-collapse: collapse;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h2 {
    align-self: flex-end;
    margin:0;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  div > p {
    font-size: 16px;
  }
`;

export default class Work_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <Wrapper className="section_content">
          <Work5>
            <Section_Text_Module title="Digital Marketing Associate">
              <p style={{fontStyle: 'italic'}}> Parfums Givenchy </p>
              <p> TODO </p>
            </Section_Text_Module>
          </Work5>
          <Work4> 
            <Section_Text_Module title="Ecommerce and CRM Associate">
              <p style={{fontStyle: 'italic'}}> Clarins USA </p>
              <p> TODO </p>
            </Section_Text_Module>
          </Work4>
          <Work3>
            <Section_Text_Module title="E-commerce Business Analyst">
              <p style={{fontStyle: 'italic'}}> NYC-based French luxury fragrance brand - through Amaris Corporation </p>
              <p> In the context of an e-commerce migration, I helped a brand to define functional and technical requirements for their new e-commerce platform.</p>
            </Section_Text_Module>
          </Work3>
          <Work2>
            <Section_Text_Module title="QA Lead">
              <p style={{fontStyle: 'italic'}}> LA and NYC-based lifestyle blog - through Amaris Corporation </p>
              <p> Managing full QA cycle for an e-commerce platform migration </p>
            </Section_Text_Module>
          </Work2>
          <Work1> 
            <Section_Text_Module title="Technical Project Manager">
              <p style={{fontStyle: 'italic'}}> Leading French luxury house - through Amaris Corporation </p>
              <p> Coordinating new features development on the US e-commerce website (projects involving Frontend, Backend and Hybris development, 3rd party integrations) </p>
            </Section_Text_Module>
          </Work1>
          <Work0>
            <h1>Work Experience</h1>
          </Work0>
        </Wrapper>
        <Navigation/>
      </div>
    )
  }
};
