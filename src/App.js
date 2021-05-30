import React, { Component } from "react";
import './App.css';
import RandomMemeApp from './RandomMemeApp';
import MemeGenerator from './MemeGenerator';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick =() => {
    ReactDOM.render(<RandomMemeApp />, document.getElementById('root'))
  }

  handleClick2 = () => {
    ReactDOM.render(<MemeGenerator />, document.getElementById('root'))
  }

  render() {
    return (
      <div className="App">
        <h1 class="rainbow-text">
          HOMEPAGE FOR MEMES
        </h1>
        <button id="button-generate" onClick = {this.handleClick}>
          Generate Meme
        </button>
        <button id="button-generate" onClick = {this.handleClick2}>
          DIY MEME
        </button>
      </div>
    );
  }
}


export default App;