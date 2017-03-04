/**
 * Created by hexad3cimal on 1/3/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/user/user.component';
import {AppComponent} from "./components/app.component";

// Route Configuration
export const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: '', component: AppComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
