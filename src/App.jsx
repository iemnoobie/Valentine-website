import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import bgImg from './assets/wallpaper.jpg'
import bgVideo from './assets/puppyEyes.gif'
import yesGif from './assets/shake-it-dance-ezgif.com-resize.gif'
import noGif from './assets/bunny-no.gif'
import mainMusic from './assets/main-sound.mp3'
import './App.css'
import './VideoBackground.css'


function App() {
  const navigate = useNavigate()
  const [currentGif, setCurrentGif] = useState(bgVideo)
  const audioRef = useRef(null)

  // preload hover gifs and play background music
  useEffect(() => {
    const imgs = [yesGif, noGif]
    const preloaded = imgs.map(src => {
      const i = new Image(); i.src = src; return i
    })

    // Play background music
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Music play failed:', err))
    }

    return () => {
      preloaded.forEach(i => { i.src = '' })
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  return (
    <div className="background-container">
      <audio ref={audioRef} loop volume={0.3}>
        <source src={mainMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <img src={bgImg} className="background-image" alt="background image" />
      <div className="video-container">
          <div className='content-container'>
            <img src={currentGif} className="foreground-gif" alt="foreground gif" />
            <h1 className='question'>Will You be my valentine?</h1>
            <div className='buttons'>
              <button
                className='yes-button'
                onMouseEnter={() => setCurrentGif(yesGif)}
                onMouseLeave={() => setCurrentGif(bgVideo)}
                onClick={() => navigate('/yes')}
              >Yes</button>
              
              <button
                className='no-button'
                onMouseEnter={() => setCurrentGif(noGif)}
                onMouseLeave={() => setCurrentGif(bgVideo)}
                onClick={() => navigate('/no')}
              >No</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
