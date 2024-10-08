import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./templates/home/home.module').then(m => m.HomeModule)
  }
];
