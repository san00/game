import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import Results from './components/Results';

import './App.css';


function App() {
  return (
    <Router>
      <main>
        <Header score={0}/>
        <Switch>
          <Route exact path="/">
            <Game />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>

  );
}

export default App;
