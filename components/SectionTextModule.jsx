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
    this.state = {
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div className="section_text_module" onClick={this.toggleHidden}>
        <Wrapper>{this.props.title}</Wrapper>
        {!this.state.isHidden && 
          <div>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
};

//const Content = (props) => <div>{props.children}</div>

/*export class Content extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='content'>
        <p>{this.props.content}</p>
      </div>
    )
  }
};*/
