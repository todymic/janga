import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialog} from "../../../../core/interfaces/dialog.interface";
@Component({
  selector: 'app-confirm-delete',
  standalone: true,
  imports: [
    MatButton,
    MatDialogModule
  ],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent {
  data: ConfirmDialog = inject(MAT_DIALOG_DATA);

}
