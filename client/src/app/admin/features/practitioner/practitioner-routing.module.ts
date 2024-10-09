import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PractitionerComponent} from "./practitioner.component";

const routes: Routes = [
  {
    path: '',
    component: PractitionerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionerRoutingModule { }
