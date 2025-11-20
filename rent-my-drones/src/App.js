import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home.jsx';
import LoginPage from './components/login';
import RenterDashboard from './components/renter-dashboard.jsx';
import Signup from './components/signup.jsx';
import Available from './components/available.jsx';
import './styles/App.css'
import ProtectedRoute from './components/utils/protected-route.jsx'
import Rented from './components/rented.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' component={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<RenterDashboard />} />
          <Route path='/dashboard/available' element={<Available />} />
          <Route path='/dashboard/rented' element={<Rented />} />
        </Route>
      </Routes>



    </div>
  );
}

export default App;
