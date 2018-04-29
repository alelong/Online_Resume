import React, { Component } from 'react';
import { Animate } from 'react-move';
import styled from 'styled-components';

const WorkTile = styled.div`
  grid-column: 4/7;
  grid-row: 1;
  background-color: #6d5b97;
  position: relative;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  span{
    align-self: flex-end;
  }
  transition: all 2s ease-in-out;
  -webkit-transition: all 2s ease-in-out; /** Chrome & Safari **/
  -moz-transition: all 2s ease-in-out; /** Firefox **/
  -o-transition: all 2s ease-in-out; /** Opera **/
`;

export default class WorkBanner extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: 0,
      duration: 300
    }
  }

  moveToLeft = () => {
    let left = 0;
    if (!this.state.left || this.state.left === 0){
      left = 50;
    }
    let duration = 200;
    this.setState({
      left,
      duration
    })
  }

  render () {
    let {left, duration} = this.state;
    return (
    <div>
      <Animate
        data={{
          left: left
        }}
        default={{
          left:0
        }}
        duration={duration}
        easing='easeQuadIn'
      >
        {data => (
          <WorkTile
            style={{
              transform: `translate(${data.left}px, 0)`
            }}
            onClick={this.moveToLeft}
          >
            Work Experience
          </WorkTile>
        )}
      </Animate>
    </div>
    )
  }
};
