import React, { Component } from "react";
import './App.css';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      font_size: "50",
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    };
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleClick = () => {
    let randomNumber = Math.floor(
      Math.random() * this.state.allMemeImages.length
    );
    this.setState({ randomImage: this.state.allMemeImages[randomNumber].url });
  };


  increaseFont = () => { };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(data => data.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImages: memes });
      });
  }

  
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    console.log(this.state.font_size);
    return (
      <div>
        <h1 className="rainbow-text">MAKE YOUR OWN MEME</h1>
        <div className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <input
            type="number"
            name="font_size"
            placeholder="font size"
            onChange={this.handleChange}
            value={this.state.font_size}
          />
          <button id="button-generate" onClick={this.handleClick}>Generate Meme</button>
          <button id="button-return" onClick={this.refreshPage}>Return</button>
        </div>
        <div>
          <div className="meme">
            <h2
              style={{ fontSize: Number(this.state.font_size) }}
              className="top"
            >
              {this.state.topText}
            </h2>
            <div className="container-diy">
              <img src={this.state.randomImage} alt="meme" />
            </div>
            <h2
              style={{ fontSize: Number(this.state.font_size) }}
              className="bottom"
            >
              {this.state.bottomText}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;