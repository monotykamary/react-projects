import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import "./index.css";
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
          props.history.push("/manage");
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
          </ul>
      </form>
  </div>
  </div>
  )
}

export default Login;