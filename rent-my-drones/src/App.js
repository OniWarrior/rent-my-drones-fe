import React from'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RenterDashboard from './components/RenterDashboard';
import Signup from './components/Signup';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={LoginPage}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/dashboard' component={RenterDashboard}/>
      </Switch>


    
    </div>
  );
}

export default App;
