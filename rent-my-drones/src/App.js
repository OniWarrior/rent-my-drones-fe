import React from'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RenterDashboard from './components/RenterDashboard';
import Signup from './components/Signup';
import Available from './components/Available';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={LoginPage}/>
        <Route path='/Signup' component={Signup}/>
        <Route exact path='/Dashboard' component={RenterDashboard}/>
        <Route path='/Dashboard/available' component={Available}/>
      </Switch>


    
    </div>
  );
}

export default App;
