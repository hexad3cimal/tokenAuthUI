
import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {Observable} from 'rxjs/Rx';
import {MdDialog, MdDialogRef} from '@angular/material';

export class User {
  id:string;
  user_name: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: '../../ui/app.dialog.html',
})
export class ModalDialog {

  public dialogTitle: string;
  public dialogMessage: string;

  constructor(public dialogRef: MdDialogRef<ModalDialog>) {}
}

@Component({
  selector: 'app-root',
  template:'<div layout="row" flex >'+
  '<div flex="70" fxLayoutAlign="center center">'+
  '<md-card layout-align="center center" class="margin-all half" >'+
  '<md-card-header> Add new user </md-card-header>'+
'<md-card-content>'+
'<md-input-container class="full" >'+
'<input mdInput  [(ngModel)]="username" placeholder="Username">'+
  '</md-input-container>'+
  '<md-input-container class="full">'+
  '<input mdInput type="password" [(ngModel)]="password" placeholder="Password">'+
  '</md-input-container>'+
  '<button md-raised-button color="primary" (click)="createUser(username,password)">Add</button>'+
  '</md-card-content>'+
  '</md-card>'+
  '</div>'+
  '</div>',
  styleUrls: ['../../ui/app.component.css']
})


export class UserAddComponent implements OnInit {

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
          dialogRef.componentInstance.dialogTitle = "Success!";
          dialogRef.componentInstance.dialogMessage = "User added successfully!";
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


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['../../ui/app.component.css'],
})


export class UserComponent implements OnInit {

  public users;

  public isEdit;
  public editId;


  constructor(private _userService: UserService,
            ) {


  }

  ngOnInit() {

    this.getUsers();
  }


  onSelect( user : User){
    this.editId = user.id;


    console.log(user.user_name);
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('done loading'),
    );
  }




}







