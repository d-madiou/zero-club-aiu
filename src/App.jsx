import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateClub from './pages/CreateClub'
import FileUploader from './pages/UploadFile'

function App() {

  return (
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/createclub' element={<CreateClub/>}/>
      <Route path="/upload/:action" element={<FileUploader />} />

    </Routes>
  )
}

export default App
