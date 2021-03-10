import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authenticationService {
  headers = new HttpHeaders();
  token: string;
  constructor(private route : Router) {
    this.token = localStorage.getItem('AirBagAdminToken');

  }

  checkAuthentication() {
    if (this.token == null) {
      this.route.navigate(['/login']);
      return 401;
    }
  }

  createAuthorizationHeader() {
    this.headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'})

    if (this.token == null) {
      return 401;
    }
    else {
      this.headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    }
  }

  get Header() {
    if (this.headers != null)
      return this.headers;
  }

}
