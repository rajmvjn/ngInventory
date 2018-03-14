import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface userinfo{

}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  getAuthenticate (user : User) : Observable <any> {
    return this.http.post <any> ('http://localhost:3003/api/authenticate', httpOptions);
    //return JSON.parse("{status:1}");
  }


}
