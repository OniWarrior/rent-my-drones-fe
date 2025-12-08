
import { Routes, Route } from 'react-router-dom'
import Home from './components/home.jsx';
import LoginPage from './components/login';
import Dashboard from './components/dashboard.jsx';
import Signup from './components/signup.jsx';
import Available from './components/available.jsx';
import './styles/App.css'
import ProtectedRoute from './components/utils/protected-route.jsx'
import Rented from './components/rented.jsx';
import Market from './components/owner/owner-market.jsx';
import OwnerRented from './components/owner/owner-rented.jsx';
import Owned from './components/owner/owner-drones-owned.jsx'
import AddDrone from './components/owner/owner-add-drone.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/available' element={<Available />} />
          <Route path='/dashboard/rented' element={<Rented />} />
          <Route path='/dashboard/owner-drone-market' element={<Market />} />
          <Route path='/dashboard/owner-rented-drones' element={<OwnerRented />} />
          <Route path='/dashboard/owners-drones' element={<Owned />} />
          <Route path='/dashboard/add-drone' element={<AddDrone />} />
        </Route>
      </Routes>



    </div>
  );
}

export default App;
