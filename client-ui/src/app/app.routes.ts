import { Routes } from '@angular/router';
import {HOME} from "@angular/cdk/keycodes";
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PractitionerComponent} from "./practitioner/practitioner.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Bienvenue'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: ":practitioners",
    children: [
      {
        path: '',
        component: ListComponent,
        title: 'Result page',
      },
      {
        path: ':id',
        component: PractitionerComponent,
        title: 'Profile page'
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
