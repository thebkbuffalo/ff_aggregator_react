import React, { Component } from "react";
import axios from "axios";

export default class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      team_name: '',
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <div id="signupContainer">
        <h1>SignUp</h1>
      </div>
    )
  }
}