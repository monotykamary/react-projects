import React from 'react';
import './App.css';
import Header from "./Screens/Header/Header";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Login from "./Screens/Login/Login";
import Person from "./Screens/Person/Person"
import Footer from './Screens/Footer/Footer'
import Register from './Screens/Register/Register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Info from './Screens/Info/Info';
import Team from './Screens/Team/Team';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header"><Header/></header>
        <main className="body">
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/about" exact component={About}/>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/team" exact component={Team}/>
            <Route path = "/home" exact component={Home}/>
            <Route path = "/register" exact component={Register}/>
            <Route path = "/professors/:id" exact component={Info}/>
            <Route path = "/:nameParam" render={(props)=><Person key={props.match.params.nameParam}/>}/>
          </Switch>
        </main>
        <footer className="footer"><Footer/></footer>
      </div>
    </Router>
  );
}

export default App;
