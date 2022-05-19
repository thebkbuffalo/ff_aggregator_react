import React, { Component } from "react";
import axios from "axios";
import AuthServices from '../services/auth-services'
export default class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      logged_in: false,
      user: {}
    }
  }

  loginUser(){
    var email = document.getElementById('f_email').value;
    var password = document.getElementById('f_password').value;
    AuthServices.login(email, password).then(resp=>{
      var user = JSON.parse(localStorage.getItem('user'));
      this.setState({user: user, logged_in: true});
      window.location = '/dashboard'
    });
  }

  render(){
    return(
      <div id="loginContainer">
        <h1>Login Page</h1>
        <input id='f_email' type='text' placeholder='email'/>
        <input id='f_password' type='password' placeholder='password'/>
        <input id='submit' type='submit' onClick={this.loginUser}/>
      </div>
    )
  }
}