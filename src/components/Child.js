import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <p className="child-component">
                {this.props.name}, the {this.props.title}
            </p>
        );
    }
}

export {
    Child,
};