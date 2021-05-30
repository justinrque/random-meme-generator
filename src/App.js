import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './App.css';

const { useState, useEffect } = React

const App = () => {
  const [meme, setMeme] = useState('')
  const [isFetchingMeme, setIsFetchMeme] = useState(true)
  
  useEffect(() => {
    console.log({ isFetchingMeme, meme })
  }, [isFetchingMeme, meme])
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://some-random-api.ml/meme')
      const data = await response.json()
      const { image } = data
      setMeme(image)
      setIsFetchMeme(false)
    }
    getData()
  }, [])
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div class="rainbow-text">

      <h1>Random Meme Generator</h1>
      <p><button onClick={refreshPage}>Generate more!</button></p>
      {isFetchingMeme ? <p>Generating...</p> : 
      <img 
      src={meme}
      alt="random meme"
      />}
      
    </div>
  )
}


export default App;
