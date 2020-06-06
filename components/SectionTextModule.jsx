import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  // opacity: ${props => props.hidden ? '0' : '1'}; 
  opacity: 1;
  visibility: visible;
  display: block;
  transition: opacity 0.5s;
`;

const Details = styled.div`
  //opacity: ${props => props.hidden ? '0' : '1'};
  opacity: 1;
  visibility: visible;
  display: block;
  transition: opacity 0.5s;
`;

export default class Section_Text_Module extends Component {
  constructor(props){
    super(props);
    this.state = {
      TitleIsHidden: false,
      DetailsAreHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      TitleIsHidden: !this.state.TitleIsHidden,
      DetailsAreHidden: !this.state.DetailsAreHidden
    })
  }

  render () {
    return (
        <Wrapper onClick={this.toggleHidden}>
          <Title hidden={this.state.TitleIsHidden}>
            <div>{this.props.title}</div>
          </Title>
          <Details hidden={this.state.DetailsAreHidden}>
            {this.props.children}
          </Details>
        </Wrapper>
    )
  }
};
