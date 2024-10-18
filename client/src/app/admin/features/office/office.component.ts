import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {OfficeService} from "../../core/services/office.service";
import {ActivatedRoute, Event, Router} from "@angular/router";
import {Office} from "../../core/interfaces/office.interface";
import {MatButton} from "@angular/material/button";
import {BaseFormService} from "../../core/services/base-form.service";
import {ConfirmDeleteComponent} from "../../shared/components/dialog/confirm-delete/confirm-delete.component";
import {Observable} from "rxjs";
import {ConfirmDialog} from "../../core/interfaces/dialog.interface";

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButton,
  ],
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent implements OnInit {

  officeForm!: FormGroup;

  officeService: OfficeService = inject(OfficeService);

  baseForm: BaseFormService = inject(BaseFormService);

  private _route: ActivatedRoute = inject(ActivatedRoute);

  isEditContext: boolean = false;

  currentId!: number;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {

    // form group
    this.baseForm.modelForm = this.baseForm.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.officeForm = this.baseForm.modelForm;

    // Edit Context - get current id
    this.currentId = this._route.snapshot.params['id'] as number;

    if (this.currentId) {
      this.officeService.getOne(this.currentId).subscribe((office) => {
        this.officeForm.patchValue(office);
        this.isEditContext = true;
      });
    }
  }

  onSubmit($event: Event) {
    let office = this.officeForm.value;

    if (!this.isEditContext) { // CREATE context

      this.officeService.create(office).subscribe(() => {
        this.baseForm.snackBar.open('Office successfully created!!');
        this._router.navigate(['admin', 'offices']).then();
      })

    } else {

      // EDIT context
      office.id = this.currentId;

      this.officeService.update(office).subscribe(() => {
        this.baseForm.snackBar.open('Office successfully updated!!');
        this._router.navigate(['admin', 'offices']).then();
      })

    }
  }


  onReset() {
    this.officeForm.reset(this.officeForm.value)
  }

  onRemove() {

    this.baseForm.dialog.confirm({
      title: 'Confirm delete this item',
      content: 'Do you confirm?'
    })
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.officeService.delete(this.currentId).subscribe(() => {
            this.baseForm.snackBar.open('Office successfully deleted');
            this._router.navigate(['admin', 'offices']).then();
          })
        }

      })


  }


}
