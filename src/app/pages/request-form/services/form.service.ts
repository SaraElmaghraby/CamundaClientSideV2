import { Injectable } from '@angular/core';
import { BaseService } from '../../Shared/Services/BaseService';
import { HttpClient } from '@angular/common/http';
import { authenticationService } from '../../Shared/Services/authenticationService';
import { environment } from '../../../../environments/environment';
import { listKeyitem, SelectItems } from '../../Shared/Models/SelectItems';

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseService {


  constructor( http: HttpClient,  authenticationSerives: authenticationService) {
    let baseUrl = environment.apiurl;

    super(http, authenticationSerives, baseUrl)
   }
   activate(userId: number){
     if(userId != null)
     return this.http.post(environment.apiurl + 'Account/Activate', userId)
   }
   deActivate(userId: number){
    if(userId != null)
    return this.http.post(environment.apiurl + 'Account/DeActivate', userId)
  }
  getCities(countryId){
   return this.http.get<SelectItems[]>(environment.apiurl + `Cities/City/${countryId}`);
  }
}
