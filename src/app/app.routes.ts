/**
 * Created by hexad3cimal on 1/3/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user.component';

// Route Configuration
export const routes: Routes = [
  { path: 'users', component: UserComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
