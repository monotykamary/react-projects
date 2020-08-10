import React, { Component } from "react";
import "./App.css";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import About from "./components/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from "./components/Intro";
import Package from "./components/Package";
import Contact2 from "./components/Contact2";
import Services2 from "./components/Services2";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Edit from "./components/Edit";
import SigninScreen from "./components/Signin";
import { useSelector } from 'react-redux';

function App () {
    
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/home" exact component={Home}/>
            <Route path = "/about" exact component={About}/>
            <Route path = "/signin" exact component={SigninScreen}/>
            <Route path = "/intro" exact component={Intro}/>
            <Route path = "/order" exact component={Order}/>
            <Route path = "/package" exact component={Package}/>
            <Route path = "/contact" exact component={Contact2}/>
            <Route path = "/tours/:id" exact component={Tour}/>
            <Route path = "/admin/edit/tours/:id" exact component={Edit}/>
            <Route path = "/services" exact component={Services2}/>
            <Route path = "/admin" exact component={Admin}/>
          </Switch>
        </Router>
      </div>
    );
}

export default App;

