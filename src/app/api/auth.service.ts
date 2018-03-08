import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  getAuthenticate: Observable<{}> (user : User){
    return this.http.post('http://localhost:3003/api/authenticate', user, httpOptions);
  }
}
