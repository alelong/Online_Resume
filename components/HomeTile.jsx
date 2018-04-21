import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	{
		width: 200px;
		height: 100px;
		background-color: red;
	}
	&:hover{
		background-color: yellow;
	}
`;

export default class HomeTile extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
        <Wrapper>{this.props.copy}</Wrapper>
    )
  }
};
