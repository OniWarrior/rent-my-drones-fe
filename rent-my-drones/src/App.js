import React from'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RenterDashboard from './components/RenterDashboard';
import Signup from './components/Signup';
import Available from './components/Available';
import './styles/App.css'
import ProtectedRoute from './components/utils/ProtectedRoute'
import Rented from './components/Rented';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={LoginPage}/>
        <Route path='/Signup' component={Signup}/>
        <ProtectedRoute exact path='/Dashboard' component={RenterDashboard}/>
        <ProtectedRoute path='/Dashboard/available' component={Available}/>
        <ProtectedRoute path='/Dashboard/rented' component={Rented}  />      
      </Switch>


    
    </div>
  );
}

export default App;
