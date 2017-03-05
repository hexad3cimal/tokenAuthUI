import { Component } from '@angular/core';
import {AuthenticationService} from "../utils/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../ui/app.component.css']
})
export class LoginComponent{

  public username;
  public password;

  constructor( private router: Router,
               private _authService: AuthenticationService) { }

  login(username,password) {

    this._authService.login(username, password).subscribe(
      data => {

        console.log("Data >>>"+data)
        if(data == true)
          this.router.navigate(['/']);

      },
      err => console.error(err),
      () => console.log('done loading'),
    );
  }


}
