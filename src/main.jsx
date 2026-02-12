import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import YesPage from './YesPage.jsx'
import NoPage from './NoPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
