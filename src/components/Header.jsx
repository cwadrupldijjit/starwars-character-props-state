import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className="Header">
        <h1>{ this.props.text }</h1>
      </div>
    );
  }
}

export default Header;
