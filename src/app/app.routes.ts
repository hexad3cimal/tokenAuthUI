/**
 * Created by hexad3cimal on 1/3/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/userW.component';

// Route Configuration
export const routes: Routes = [
  { path: 'users', component: UserComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
