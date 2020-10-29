import { Routes, RouterModule }  from '@angular/router';

import { Login } from './signUp.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Login
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
