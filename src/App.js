import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      subject: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
        power: !this.state.power
    })
  }

  handleChange(event) {
    this.setState({subject: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h2>Click Event Sample</h2>
        <button onClick={this.handleClick}>Button</button>
        <p>POWER is {this.state.power ? 'ON' : 'OFF' }!</p>

        <h2>Input Event Sample</h2>
        <input type='text' value={this.state.subject} onChange={this.handleChange} />
        <p>{this.state.subject}</p>
      </div>
    );
  }
}

export default App;
