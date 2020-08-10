import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import "../App.css";
import Carousel2 from '../components/Carousel2'
import { login } from "../actions/userActions";

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo, error} = userLogin; 

  const dispatch = useDispatch();
  useEffect(() => {
      if(userInfo){
          props.history.push("/");
      }
      return () => {
        //
      };
  }, [userInfo]);

  const submitHandler =(e)=>{
      e.preventDefault();
      dispatch(login(email, password));
  }

  return (
  <div>
      <Carousel2></Carousel2>
      <div className="form">
      <form onSubmit={submitHandler}>
          <ul className="form-container">
<<<<<<< HEAD
            <li>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in 
           </Header>
            </li>
            <li>
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
            </li>
            <li>
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
            </li>
            <li>
              <Button type="submit" onClick={onclickHandler} color='teal' fluid size='large'>
                Login
              </Button>
              <label><input type="checkbox" checked="checked" name="remember"/> Remember me</label>  
            </li>
=======
              <li>
                  <li>
                      <h2>Login</h2>
                  </li>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}>
                  </input>
              </li>
              <li>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}>
                  </input>
              </li>
              <li>
                  <button type="submit" className ="button primary">Login</button>
              </li>
>>>>>>> origin/testing3
          </ul>
      </form>
  </div>
  </div>
  )
}

export default Login;