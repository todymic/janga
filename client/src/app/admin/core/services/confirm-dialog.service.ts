import {inject, Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDeleteComponent} from "../../shared/components/dialog/confirm-delete/confirm-delete.component";
import {Observable} from "rxjs";
import {ConfirmDialog} from "../interfaces/dialog.interface";

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {
  }

  confirm(data: ConfirmDialog): Observable<boolean> {
    return this.dialog.open(ConfirmDeleteComponent, {
      data,
      disableClose: true
    }).afterClosed()
  }
}
