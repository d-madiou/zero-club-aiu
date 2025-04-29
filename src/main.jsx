import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <App />
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
