import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  register(user:any){
    const url = 'https://authenticationapp-api.herokuapp.com/api/v1/auth/register';
    return this.http.post(url, user);
  }

  login(user:any){
    const url = 'https://authenticationapp-api.herokuapp.com/api/v1/auth/login';
    return this.http.post(url, user);
  }

  getUser(){
    let userStr = localStorage.getItem("LOGGED_IN_USER")
    let user = userStr ? JSON.parse(userStr): null;
    return user;
  }
}
