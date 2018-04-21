import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.p`
	&:hover{
		color: #676767;
	}
`;

export default class Section_Text_Module extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div className="section_text_module">
        <Wrapper>{this.props.copy}</Wrapper>
      </div>
    )
  }
};