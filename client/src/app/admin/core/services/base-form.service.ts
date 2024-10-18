import {inject, Injectable, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "@angular/cdk/dialog";
import {ConfirmDialogService} from "./confirm-dialog.service";

@Injectable({
  providedIn: 'root'
})
export class BaseFormService  {
  formBuilder: FormBuilder = inject(FormBuilder);
  modelForm!: FormGroup;
  snackBar = inject(MatSnackBar);
  dialog: ConfirmDialogService = inject(ConfirmDialogService);


  constructor() { }
  isValidField(lastname: string): boolean | undefined {
    const field = this.modelForm.get(lastname);
    return field?.invalid && (field?.dirty || field?.touched);
  }

}
