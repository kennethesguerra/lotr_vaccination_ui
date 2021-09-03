import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, 
  HashRouter,
  Switch } from 'react-router-dom'

import Header from './components/layout/Header';
import Vaccinees from './components/vaccinees/Vaccinees';
import Menus from './components/layout/Menus';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Container>
            <Header />
            <Menus />
            <Switch>
              <Route exact path="/" component={Vaccinees}></Route>
              <Route exact path="/create" component={Vaccinees}></Route>
              <Route exact path="/update" component={Vaccinees}></Route>
            </Switch>
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default App;
