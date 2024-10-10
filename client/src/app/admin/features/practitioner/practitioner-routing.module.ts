import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PractitionerComponent} from "./practitioner.component";
import {PractitionerEditComponent} from "./practitioner-edit.component";

const routes: Routes = [
  {
    path: '',
    component: PractitionerComponent
  },
  {
    path: 'edit/:id',
    component: PractitionerEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionerRoutingModule { }
