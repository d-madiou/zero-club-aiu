import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateClub from './pages/CreateClub'
import FileUploader from './pages/UploadFile'
import Dashboard from './pages/Dashboard'
import ClubDetails from './components/ClubDetails'
import Profile from './components/Profile'

function App() {

  return (
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/club-details/:id' element={<ClubDetails/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/createclub' element={<CreateClub/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/upload/:action" element={<FileUploader />} />
    </Routes>
  )
}

export default App
