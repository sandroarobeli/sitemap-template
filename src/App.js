// Third party modules
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Custom modules
//import Routes from './Routes'
import Home from './pages/Home'
import Red from './pages/Red'
import Orange from './pages/Orange'
import Yellow from './pages/Yellow'
import Green from './pages/Green'
import Blue from './pages/Blue.jsx'
import Violet from './pages/Violet.jsx'
import User from './pages/User.jsx'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Sitemap Blueprint</h1>
      <Router>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/red' exact>
                    <Red />
                </Route>
                <Route path='/orange' exact>
                    <Orange />
                </Route>
                <Route path='/yellow' exact>
                    <Yellow />
                </Route>
                <Route path='/green' exact>
                    <Green />
                </Route>
                <Route path='/blue' exact>
                    <Blue />
                </Route>
                <Route path='/violet' exact>
                    <Violet />
                </Route>
                <Route path='/users/:userId' exact>
                    <User />
                </Route>
                <Redirect to='/' />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
