import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'

function Layout() {
  const location = useLocation()
  const hideLayout = location.pathname.startsWith('/dashboard')

  return (
    <>
      {!hideLayout && <NavBar />}
      <App />
      {!hideLayout && <Footer />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)
