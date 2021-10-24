import React from'react'
import UnsignedNavigation from './components/UnsignedNavigation';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <UnsignedNavigation/>

      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>


    
    </div>
  );
}

export default App;
