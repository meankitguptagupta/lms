import { Injectable } from '@angular/core';
import { Token } from 'src/app/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  store(token:Token):Promise<any> {
    return new Promise (resolve => {
      sessionStorage.setItem ('currentUser', JSON.stringify (token));
      return resolve (true);
    });
  }

   /**
   * Check if user already login or not
   */
  islogin():boolean {
    return sessionStorage.currentUser;
  }

  /**
   * Method to logout user
   */
  logout ():void {
    sessionStorage.removeItem ('currentUser');
  }

  /**
   * Method to check if token is valid
   */
  isTokenValid():boolean {
    return this.calculateTokenValidity() ? true : false;
  }

  calculateTokenValidity():number {
    return this.decodeToken().exp - Math.floor (Date.now()/1000);
  }

  getToken():string {
    let currentUser = JSON.parse (sessionStorage.getItem ('currentUser'));
    return currentUser.type + ' ' + currentUser.token;
  }

  tokenValidity():number {
    return this.decodeToken().exp;
  }

  getRole():string {
    return this.decodeToken().role;
  }

  private decodeToken () {
    let base64Url = this.getToken().split('.')[1],
      base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

    return JSON.parse (base64);
  }
}
