import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Test />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello world</p>
          <Test1 />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Test2 />
        </header>
      </div>
    );
  }
}

function Test() {
  return (
  <div>
    <h1>Test component</h1>
    <p>Hello world Test</p>
  </div>
  )
}


const Test1 = () => 
  <div>
    <h1>Test1 component</h1>
    <p>Hello world Test1</p>
  </div>


const Test2 = () => {
  return (
    <div>
      <h1>Test2 component</h1>
      <p>Hello world Test2</p>
    </div>
  )
}
export default App;
