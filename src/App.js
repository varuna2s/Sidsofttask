import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Customer from './Customer';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className='link1'>
              <Link to="/Home">Home</Link>
            </li>
            <li className='link'>
              <Link to="/customer" className='link'>Customer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
