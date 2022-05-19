import axios from 'axios';
const API_URL = "http://localhost:3000/"

class AuthService {
  login(email, password){
    var user = {"email": email, "password": password}
    return axios.post(API_URL+"users/sign_in", {user}).then(resp=>{
      if(resp.statusText === 'OK'){
        var auth_token = resp.headers.authorization.split(' ')[1]
        localStorage.setItem('auth_token', auth_token);
        localStorage.setItem('user', JSON.stringify(resp.data.user));
      }
      return resp.data
    }).catch((error)=>console.log(error));
  }

  logout(){

  }

  register(signup_params){

  }

  getCurrentUser(){
    
  }
}

export default new AuthService();