import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/login';
import RenterDashboard from './components/RenterDashboard';
import Signup from './components/signup.jsx';
import Available from './components/Available';
import './styles/App.css'
import ProtectedRoute from './components/utils/ProtectedRoute'
import Rented from './components/Rented';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' component={<Signup />} />
        <ProtectedRoute exact path='/dashboard' element={<RenterDashboard />} />
        <ProtectedRoute path='/dashboard/available' component={<Available />} />
        <ProtectedRoute path='/dashboard/rented' component={<Rented />} />
      </Routes>



    </div>
  );
}

export default App;
