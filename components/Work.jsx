import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section_Head from './SectionHead.jsx';
import Section_Text_Module from './SectionTextModule.jsx';
import styled from 'styled-components';
import Navigation from './Navigation.jsx';

const Wrapper = styled.div`
	background-color: #123456;
`;

export default class Work_Section extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <Wrapper className="section_content">
        <Section_Head 
          name="Work Experience"
        />
        <Section_Text_Module 
          copy="This will be Work Experience #1"
        />
        <Section_Text_Module 
          copy="This will be Work Experience #2"
        />
        <Section_Text_Module 
          copy="etc."
        />
	<Navigation />
      </Wrapper>
    )
  }
};
