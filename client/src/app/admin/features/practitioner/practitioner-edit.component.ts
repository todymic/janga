import {Component, OnInit} from '@angular/core';
import {PractitionerService} from "../../core/services/practitioner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Practitioner} from "../../core/interfaces/practitioner.interface";
import {map, Observer} from "rxjs";

@Component({
  selector: 'app-practitioner-edit',
  standalone: true,
  imports: [],
  templateUrl: './practitioner-edit.component.html',
  styleUrl: './practitioner-edit.component.scss'
})
export class PractitionerEditComponent implements OnInit {

  constructor(private _practitionerService: PractitionerService,
              private _route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    const observer: Observer<unknown> = {
      next: (practitioner: unknown) => console.log(practitioner),
      complete: ()=>{},
      error: err => {}
    };

    this._practitionerService.data
      .pipe(
        map((practitioners: Practitioner[]) => practitioners.find(value => value.id == id))
      )
      .subscribe(observer);
  }

}
