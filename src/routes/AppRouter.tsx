import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../movies/pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={  <h1>Login Page</h1> }  />
      <Route path='/home' element={  <Home /> }  />

      <Route path='/' element={ <Navigate to="/home" /> } />

      
    </Routes>
  )
}
