import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/auth';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function RegisterScreen(props) {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [Error, setError] = useState(false)
    const [Message,setMessage]=useState('')
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const ErrorHandle = (error, message) => {
        setError(error)
        setMessage(message)
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        if(Name === ''){
            ErrorHandle(true, 'Enter Name');
            return;
        }

        const emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        if(!emailPattern.test(Email)){
            ErrorHandle(true, 'Invalid Email Address'); return;
        }

        if(Password === ''){
            ErrorHandle(true, 'Enter Password'); return;
        }
        
        if(RePassword === ''){
            ErrorHandle(true, 'Enter RePassword'); return;
        }
        if(Password !== RePassword){
            ErrorHandle(true, "Password doesn't match");
            return;
        }
       const ret= dispatch(signup(Name, Email, Password));
       if(ret.status){
           props.history.push("/")
       }
        
    }

    return (
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Create Your Account
            </Header>
          </li>
          <li>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="rePassword"><b>Re-Enter Password</b></label>
            <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
            </input>
          </li>
          {Error?<li>
              <p style={{color: "red"}}>{Message}</p>
          </li>:null}
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
      </form>
  </div>
    )
}

export default RegisterScreen;

