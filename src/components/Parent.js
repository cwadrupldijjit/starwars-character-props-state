import React, { Component } from 'react';
import axios from 'axios';

import Child from './Child';
import Counter from './Counter';

class Parent extends Component {
  constructor() {
      super();
      
      this.state = {
          children: [],
          newChildName: '',
          newChildTitle: '',
      };
  }
  
  componentWillMount() {
      axios
        .get('//localhost:8000/children')
        .then(response => {
            this.setState({
                children: response.data,
            });
        });
  }
  
  render() {
    const children = this.state.children
        .map((child, i) => (
            <li key={`children-${this.props.name}-${i}`}>
                <Child name={child.name} title={child.title} />
                <button onClick={() => this.removeChild(i)}>X</button>
            </li>
        ));
    
    return (
      <div className="Parent">
        <h2>{ this.props.name }</h2>
        
        <h3>Children:</h3>
        <ul>
            {children}
            
            <li>
                <input
                    placeholder="Name"
                    value={this.state.newChildName}
                    onChange={e => this.onNewChildChange('newChildName', e.target.value)} />
                &nbsp;
                <input
                    placeholder="Title"
                    value={this.state.newChildTitle}
                    onChange={e => this.onNewChildChange('newChildTitle', e.target.value)} />
                &nbsp;
                <button onClick={() => this.addChild()}>Add</button>
            </li>
        </ul>
        
        <h3>Enemies Defeated:</h3>
        <Counter />
      </div>
    );
  }
  
  onNewChildChange(input, value) {
      this.setState({
          [input]: value,
      });
  }
  
  addChild() {
      axios
        .post('//localhost:8000/child', {
            name: this.state.newChildName,
            title: this.state.newChildTitle,
        })
        .then(response => {
            this.setState({
                children: [
                    ...this.state.children,
                    response.data,
                ],
                newChildName: '',
                newChildTitle: '',
            });
        })
  }
  
  removeChild(index) {
      axios
        .delete('//localhost:8000/child/' + index)
        .then(response => {
            this.setState({
                children: this.state.children.filter((child, i) => index != i),
            });
        });
  }
}

export default Parent;
