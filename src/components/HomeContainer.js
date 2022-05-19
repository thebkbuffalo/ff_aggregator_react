import React, { Component } from "react";
import axios from "axios";

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  render(){
    return(
      <div id='homeContainer'>
        <h1>Home</h1>
      </div>
    )
  }
}