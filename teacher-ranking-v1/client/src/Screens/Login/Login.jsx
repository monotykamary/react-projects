import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login() {

  const onclickHandler=()=>{
      
  }

  return (
    <div className="form">
          <ul className="form-container">
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
            <li>
                    New to us?
                </li>
                <li>
                    <Link to= "/register" className="button secondary full-width">Create your account</Link>
                </li>  
          </ul>
    </div>
  );
}

const Login1 = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us?  <Link to= "/register" className="button secondary full-width">Create your account</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Login;
