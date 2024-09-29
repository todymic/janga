import { Routes } from '@angular/router';
import {HOME} from "@angular/cdk/keycodes";
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {ProfilComponent} from "./profil/profil.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Bienvenue'
  },
  {
    path: ':partitionner',
    component: ProfilComponent,
    title: 'Result page'
  }
];
