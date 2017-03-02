import {Component} from '@angular/core';
import {UserService} from '../users/user.service';
import {Observable} from 'rxjs/Rx';


@Component({
  styleUrls: ['../ui/app.component.css'],
  template: `
    <div layout="row" >
      <div class="half">
        <h3>Books</h3>
        <ul>
          <li *ngFor="let user of users">{{user.user_name}}</li>
        </ul>
      </div>
      <div class="half">
        <p>Create a new food: <input type="text" name="username" [(ngModel)]="username"></p>
        <p>Create a new food: <input type="text" name="password" [(ngModel)]="password"></p>
        <button (click)="createUser(username,password)">Save</button>
      </div>
      </div>
    <div layout="row" layout-align="center center" >

    <div flex="70">
        <md-card class="app-input-section">
          <md-input placeholder="username" [(ngModel)]="username"></md-input>
          <md-input class="full"  [(ngModel)]="password" placeholder="Password"> </md-input>

          <button md-raised-button color="primary" (click)="createUser(username,password)">Add</button>
        </md-card>
      </div>
    </div>`
})

export class UserComponent {

  public users;
  public username;
  public password;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('done loading')
    );
  }


  createUser(username,password) {

    let user = {
      user_name: username,
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
