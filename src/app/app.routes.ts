/**
 * Created by hexad3cimal on 1/3/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/login/login.component';

// Route Configuration
export const routes: Routes = [
  {
    path: 'users', component: UserComponent},
  {path: 'login', component: LoginComponent}

  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
