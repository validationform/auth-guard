import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {

  constructor() { }
  isUserLogin(){  
    return !!localStorage.getItem("token");  
    } 
}
