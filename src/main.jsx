import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './pages/App.jsx'
import Description from './pages/Description.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:username/:repo" element={<Description />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
