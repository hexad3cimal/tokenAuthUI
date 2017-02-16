import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: '../ui/app.component.html',
  styleUrls: ['../ui/app.component.css']
})

export class AppComponent {

  public users;
  public user;
  public username;
  public password;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      // the first argument is a function which runs on success
      data => { this.users = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading')
    );
  }


  createUser(username,password) {

    let user = {Id:"10",
      username: username,
    password: password
    };


    this._userService.createUser(user).subscribe(

    data => {

        this.getUsers();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    );
  }

  updateUser(username) {
    this._userService.updateUser(username).subscribe(
      data => {
        // refresh the list
        this.getUsers();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    );
  }

  deleteUser(username) {
    if (confirm("Are you sure you want to delete " + username+ "?")) {
      this._userService.deleteUser(username).subscribe(
        data => {
          // refresh the list
          this.getUsers();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    }
  }

}
