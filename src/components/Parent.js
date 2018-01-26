import React, { Component } from 'react';

import { Child } from './Child';
import { Counter } from './Counter';

class Parent extends Component {
    render() {
        const children = this.props
                .kids
                .map((child, i) => (
                    <li key={`child-${i}`}>
                        <Child name={child.name} title={child.title} />
                    </li>
                ));
        
        return (
            <div className="parent-component">
                <h2>{this.props.name}</h2>
                {this.props.kids && (
                    <div className="children">
                        <h3>Children:</h3>
                        
                        <ul>
                            {children}
                        </ul>
                    </div>
                )}
                
                <h3>Number of Enemies Defeated:</h3>
                <Counter />
            </div>
        );
    }
}

export {
    Parent,
};