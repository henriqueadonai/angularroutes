import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  private loggedIn = false;

constructor(private http: Http) {
    this.loggedIn = false;//!!localStorage.getItem('auth_token');

  }

  login(email, password){
    
    if (email === "henrique" && password === "password"){
        this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
    return this.loggedIn;    
    
  }

  logout() {
    //localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  

  isLoggedIn() {
    return this.loggedIn;
  }




}