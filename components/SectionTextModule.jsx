import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
      //<div className="section_text_module" onClick={this.toggleHidden}>
        <Wrapper onClick={this.toggleHidden}>
            {!this.state.TitleIsHidden && 
            <h2>
              {this.props.title}
            </h2>
            }
            {!this.state.DetailsAreHidden && 
              <div>
                {this.props.children}
              </div>
            }
        </Wrapper>
      //</div>
    )
  }
};
