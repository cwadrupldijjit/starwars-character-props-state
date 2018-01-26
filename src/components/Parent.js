import React, { Component } from 'react';

import Child from './Child';
import Counter from './Counter';

class Parent extends Component {
  render() {
    const children = [
        {
            name: 'Luke',
            title: 'New Hope',
        },
        {
            name: 'Leia',
            title: 'Princess of Alderaan',
        },
    ]
        .map((child, i) => (
            <li key={`children-${this.props.name}-${i}`}>
                <Child name={child.name} title={child.title} />
            </li>
        ));
    
    return (
      <div className="Parent">
        <h2>{ this.props.name }</h2>
        
        <h3>Children:</h3>
        <ul>
            {children}
        </ul>
        
        <h3>Enemies Defeated:</h3>
        <Counter />
      </div>
    );
  }
}

export default Parent;
