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
        .get('/children')
        .then(response => {
            this.setState({
                children: response.data,
            });
        });
  }
  
  render() {
    const children = this.state.children
        .map(child => (
            <li key={`children-${this.props.name}-${child.id}`}>
                <Child name={child.name} title={child.title} />
                <button onClick={() => this.removeChild(child.id)}>X</button>
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
        .post('/child', {
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
  
  removeChild(id) {
      axios
        .delete('/child/' + id)
        .then(response => {
            this.setState({
                children: this.state.children.filter(child => id != child.id),
            });
        });
  }
}

export default Parent;
