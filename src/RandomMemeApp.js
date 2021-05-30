import React, { useState, useEffect } from "react";
import './App.css';


const RandomMemeApp = () => {
  const [meme, setMeme] = useState('')
  const [isFetchingMeme, setIsFetchMeme] = useState(true)

  
  useEffect(() => {
    console.log({ isFetchingMeme, meme })
  }, [isFetchingMeme, meme])
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://meme-api.herokuapp.com/gimme')
      // ^ reddit meme scraper api ^
      // https://some-random-api.ml/meme
      // ^ another meme api ^
      const data = await response.json()
      const { url } = data
      setMeme(url)
      setIsFetchMeme(false)
    }
    getData()
  }, [])
  
  function refreshPage() {
    window.location.reload(false);
  }

  
  return (
    <div>
      <h1 class="rainbow-text">Random Meme Generator</h1>
      <div><button id="button-return"
      onClick={refreshPage}>Return</button></div>
      <div class="container">
      {isFetchingMeme ? <p>Generating...</p> : 
      <img src={meme} alt="random meme"/>}
      </div>
    </div>
  )
}

export default RandomMemeApp;