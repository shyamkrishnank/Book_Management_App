import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/InitialPages/Landing'
import LoginPage from './components/pages/InitialPages/LoginPage'
import Init from './components/pages/InitialPages/Init'
import SignupPage from './components/pages/InitialPages/SignupPage'
import HomePage from './components/pages/Home/HomePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/auth/ProtectedRoute'
import AuthRoute from './components/auth/AuthRoute'
import MyBooks from './components/pages/Home/MyBooks'
import InitialHome from './components/pages/Home/InitialHome'
import GenreBook from './components/pages/Home/GenreBook'
import MyReading from './components/pages/Home/MyReading'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route element={<AuthRoute />}>
        <Route path='/' element={<Init />} >
          <Route index element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
        </Route>

        <Route element={<ProtectedRoute/>} >
          <Route path='/user' element={<InitialHome />}>
             <Route path='home' element={<HomePage />}/>
             <Route path='mybooks' element={<MyBooks />} />
             <Route path='view/:genre' element={<GenreBook/>} />
             <Route path='myreadings' element={<MyReading/>} />
          </Route>
        </Route>

      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
