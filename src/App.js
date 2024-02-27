import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Overview from "./components/Overview";
import News from "./components/News";
import About from "./components/About";
import Login from "./components/Login";
import Learn from "./components/Learn";

import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/news">
              <News />
            </Route>            
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </>
    )
  }

}


