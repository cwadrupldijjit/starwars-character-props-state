import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        
        this.state = {
            count: 0,
        };
        
        this.increment = this.increment.bind(this);
    }
    
    render() {
        return (
            <div className="counter-component">
                <p>{this.state.count}</p>
                
                <div>
                    <button onClick={() => this.handleClick(-5)}>-5</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button onClick={() => this.handleClick(5)}>+5</button>
                </div>
            </div>
        );
    }
    
    handleClick(factor) {
        this.setState({
            count: factor + this.state.count,
        });
    }
    
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
}

export {
    Counter,
};