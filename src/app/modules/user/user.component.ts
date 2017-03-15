
import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {Observable} from 'rxjs/Rx';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: '../../ui/app.dialog.html',
})
export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>) {}
}


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['../../ui/app.component.css'],
})


export class UserComponent implements OnInit {

  public users;
  public username;
  public password;
  public dialogTitle: string;
  public dialogMessage: string;


  constructor(private _userService: UserService,
              public dialog: MdDialog) {

  }

  ngOnInit() {

    this.getUsers();
  }


  getUsers() {
    this._userService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('done loading'),
    );
  }



  createUser(username,password) {

    let user = {
      user_name: username,
      password: password
    };


    this._userService.createUser(user).subscribe(

      data => {

        if(data == "Success!")
        {


          let dialogRef = this.dialog.open(ModalDialog);
          dialogRef.afterClosed().subscribe(result => {
           console.log("Closed");
          });


          this.getUsers();
          return true;

        } else {
        }
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







