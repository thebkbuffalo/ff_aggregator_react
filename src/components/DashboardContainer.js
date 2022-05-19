import React, { Component } from "react";
import axios from "axios";

export default class DashboardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  render(){
    return(
      <div id='dashboardContainer'>
        <h1>Dashboard</h1>
      </div>
    )
  }
}