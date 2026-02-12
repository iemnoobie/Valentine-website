import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NoBg from './assets/no-bg.jpg'
import noGif from './assets/snowball-rocksideroad.gif'
import noMusic from './assets/No-sound.mp3'
import './App.css'
import './VideoBackground.css'

function NoPage() {
  const navigate = useNavigate()
  const audioRef = useRef(null)

  // Preload the background image and play music
  useEffect(() => {
    const img = new Image()
    img.src = NoBg

    // Play background music
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Music play failed:', err))
    }

    return () => {
      img.src = ''
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  return (
    <div className="background-container">
      <audio ref={audioRef} loop volume={0.3}>
        <source src={noMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <img src={NoBg} className="background-image" alt="no background" />
      <div className="video-container">
        <div className='content-container'>
          <img src={noGif} className="foreground-gif" alt="sad gif" />
          <h1 className='question'>Oh no! 💔</h1>
          <div className='buttons'>
            <button
              className='no-button'
              onClick={() => navigate('/')}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoPage
