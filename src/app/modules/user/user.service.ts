/**
 * Created by hexad3cimal on 14/2/17.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { AuthenticationService } from '../utils/auth';

@Injectable()
export class UserService {

  constructor(private http:Http,
              private authenticationService: AuthenticationService) {
  }

  getUsers() {
    let headers = new Headers({'Content-Type': 'application/json',
      'Authorization': this.authenticationService.token });
    let options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:3000/users',options).map((res:Response) => res.json());
  }




  createUser(user) {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:3000/users', body, options).map((res:Response) => res.json());
  }

  updateUser(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(user);
    return this.http.put('http://localhost:3000/users' + user.id, body, options).map((res:Response) => res.json());
  }

  deleteUser(user) {
    return this.http.delete('http://localhost:3000/users' + user.id);
  }

}
