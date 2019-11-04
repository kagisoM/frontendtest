import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import {tokenNotExpired} from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials) {
  }

  logout() {
  	localStorage.removeItem('token');
  }

  /*isLoggedIn(){
  	return tokenNotExpired();
  }*/
}
