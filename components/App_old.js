import React, {Component} from 'react';

class Button extends Component {

state = {
	counter: 0,
  r_value: 0,
  g_value: 0,
  b_value: 0
}

handleClick = () => { //by convention, add "_" before function name if called only inside the current class
	//console.log('click!');
  this.setState(
  	(prevState, props) => (
    	{counter: prevState.counter + props.step,
      r_value: prevState.r_value + 20*prevState.counter,
      g_value: prevState.g_value + 5*prevState.counter,
      b_value: prevState.b_value + 3*prevState.counter,
      }
    )
    )
}

render() {
	return(
  	<button 
    	onClick = {this.handleClick} 
      style={{
      	backgroundColor: `rgb(${this.state.r_value}, ${this.state.g_value}, ${this.state.b_value})`
        }}
    >
    	{this.state.counter}
    </button>
  );
}
}

export default class App extends Component {
render(){
	return(
  <div>
  <p>This is my new react app</p>
  <Button step={4} />
  <Button step={2} />
  </div>
  );
}
}
