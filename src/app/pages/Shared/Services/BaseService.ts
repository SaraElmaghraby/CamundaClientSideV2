import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";

import { authenticationService } from "./authenticationService";

export class BaseService {
  headers = new HttpHeaders();
  constructor(
    public http: HttpClient,
    private authenticationSerives: authenticationService,
    private url: string
  ) {
    this.authenticationSerives.createAuthorizationHeader();
    this.headers = this.authenticationSerives.headers;
  }

  getApi(route: string) {
    return this.http.get(this.url + route, {
      headers: this.headers,
    });
  }
  getById(id: number) {
    return this.http.get(this.url + id, {
      headers: this.headers,
    });
  }

  post(object: any, route = "") {
    return this.http.post(this.url + route, object, {
      headers: this.headers,
    });
  }
}
