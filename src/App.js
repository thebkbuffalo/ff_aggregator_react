import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import axios from 'axios';
import Home from "./components/HomeContainer"
import Login from "./components/LoginContainer"
import Signup from "./components/SignupContainer"
import Dashboard from "./components/DashboardContainer"
import './App.css';
import { Component } from 'react';
const API_URL = "http://localhost:3000/"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    )
  }
}

// function useAutht(){
//   return React.useContext(AuthContext);
// }

// function AuthStatus(){

// }

// function PrivateRoute({children}){
//   useAuth();
//   return auth ? children : <Navigate to="/login"/>
// }

// function useAuth(){
//   const token = localStorage.getItem('auth_token');
//   axios.get(API_URL+'member-data', {
//     headers: {'Authorization': `Bearer ${token}`}
//   }).then((resp)=>{
//     var local_user = JSON.parse(localStorage.getItem('user'));
//     if(resp.statusText === 'OK' && local_user.id === resp.data.user.id){
//       this.setState({isLoggedIn: true});
//     }
//   });
// }