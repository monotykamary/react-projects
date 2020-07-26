import React from 'react';
import {Link} from "react-router-dom"
import "../App.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Register() {

  const onclickHandler=()=>{
      
  }

  return (
    <div className="form">
          <ul className="form-container">
            <li>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Create Your Account
           </Header>
            </li>
            <li>
              <label for="uname"><b>Name</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
            </li>
            <li>
              <label for="uname"><b>Email</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
            </li>
            <li>
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
            </li>
            <li>
              <label for="psw"><b>Re-Enter Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
            </li>
            <li>
            <Button color='teal' fluid size='large'>
              Register
            </Button>
          </li>
          <li>
            Already have an account?
            <Link to ="/login">Login</Link>
          </li>
          </ul>
    </div>
  );
}

export default Register;
