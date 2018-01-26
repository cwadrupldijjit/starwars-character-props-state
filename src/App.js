import React, { Component } from 'react';

import './App.css';
import { Title } from './components/Title';
import { Parent } from './components/Parent';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      title: 'Star Wars Character',
    };
  }
  
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
    ];
    
    return (
      <div className="App">
        {/* <Title text="Count on me!" /> */}
        <Title text={this.state.title} />
        {/* <Title>
          {this.state.title}
        </Title> */}
        
        <Parent name="Anakin" kids={children} />
      </div>
    );
  }
}

export default App;
