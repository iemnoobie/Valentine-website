import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import YesBg from './assets/yes-bg.jpg'
import yesGif2 from './assets/bunny-yes.gif'
import yesMusic from './assets/happy-sound.mp3'
import './App.css'
import './VideoBackground.css'

function YesPage() {
  const navigate = useNavigate()
  const audioRef = useRef(null)

  // Preload the background image and play music
  useEffect(() => {
    const img = new Image()
    img.src = YesBg

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
        <source src={yesMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <img src={YesBg} className="background-image" alt="yes background" />
      <div className="video-container">
        <div className='content-container'>
          <img src={yesGif2} className="foreground-gif" alt="celebration gif" />
          <h1 className='question'>Yay! I'm so happy! 🎉</h1>
          <div className='buttons'>
            <button
              className='yes-button'
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

export default YesPage
