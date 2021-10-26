import React from'react'
import UnsignedNavigation from './components/UnsignedNavigation';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <UnsignedNavigation/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={LoginPage}/>
      </Switch>


    
    </div>
  );
}

export default App;
