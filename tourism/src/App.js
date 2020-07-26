import React, { Component } from "react";
import "./App.css";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import About from "./components/About";
import Login from "./components/Login"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from "./components/Register";
import Intro from "./components/Intro";
import Package from "./components/Package";

function App () {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/home" exact component={Home}/>
            <Route path = "/about" exact component={About}/>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/tour" exact component={Tour}/>
            <Route path = "/intro" exact component={Intro}/>
            <Route path = "/package" exact component={Package}/>
            <Route path = "/register" exact component={Register}/>
          </Switch>
        </Router>
      </div>
    );
}

export default App;

