import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
      super();
      
      this.state = {
          count: 0,
      };
      
    //   this.increment = this.increment.bind(this);
    //   this.decrement = this.decrement.bind(this);
  }
  
  render() {
    return (
      <div className="Counter">
        <p>
            {this.state.count}
        </p>
        
        <div>
            <button onClick={() => this.handleClick(-5)}>-5</button>
            <button onClick={() => this.handleClick(-1)}>-</button>
            <button onClick={() => this.handleClick(1)}>+</button>
            <button onClick={() => this.handleClick(5)}>+5</button>
        </div>
      </div>
    );
  }
  
  handleClick(factor) {
    this.setState({
        count: this.state.count + factor,
    });
  }
  
//   increment() {
//       this.setState({
//           count: this.state.count + 1,
//       });
//   }
  
//   decrement() {
//       this.setState({
//           count: this.state.count - 1,
//       });
//   }
}

export default Counter;
