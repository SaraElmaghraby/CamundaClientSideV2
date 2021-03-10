import { Injectable } from '@angular/core';
import { BaseService } from '../../../Shared/Services/BaseService';
import { HttpClient } from '@angular/common/http';
import { authenticationService } from '../../../Shared/Services/authenticationService';
import { environment } from '../../../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService{

  constructor(http: HttpClient, authentication: authenticationService) {
    super(http, authentication, environment.apiurl)
   }

   login(user: User){
     return this.http.post<any>(environment.apiurl + 'identity/verify', user,
     {
       headers : this.headers
     });
   }
}
