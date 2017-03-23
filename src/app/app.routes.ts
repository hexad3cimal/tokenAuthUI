/**
 * Created by hexad3cimal on 1/3/17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent, UserAddComponent} from './modules/user/user.component';
import {LoginComponent} from './modules/login/login.component';
import {UnauthComponentComponent} from './modules/unauth-component/unauth-component.component';
import {AuthGuard} from "./auth-guard";

// Route Configuration
export const routes: Routes = [
  {
    path: 'users', component: UserComponent, canActivate: [AuthGuard]

  },
  {
    path: 'users/add',
    component: UserAddComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '403', component: UnauthComponentComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
