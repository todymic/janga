import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  ViewChild
} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {Office, Office as IOffice} from "../../core/interfaces/office.interface";
import {OfficeService} from "../../core/services/office.service";
import {ConfirmDialogService} from "../../core/services/confirm-dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";
import {SnackbarService} from "../../core/services/snackbar.service";

@Component({
  selector: 'app-office-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatTable,
    MatInput,
    MatSortModule,
    MatSort,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginator,
    MatButton,
    MatAnchor,
    RouterLink, MatIconButton, MatIcon],
  templateUrl: './office-list.component.html',
  styleUrl: './office-list.component.scss',

})

export class OfficeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'street', 'city', 'country', 'action'];
  dataSource: MatTableDataSource<IOffice> = new MatTableDataSource();
  officeService: OfficeService = inject(OfficeService);
  dialog: ConfirmDialogService = inject(ConfirmDialogService);
  private _snackBar: SnackbarService = inject(SnackbarService)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _router: Router) {
    this.officeService.getAll().subscribe(offices => this.dataSource.data = offices)
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editOffice(office: Office) {
    this._router.navigate(['admin', 'offices', 'edit', office.id]).then();
  }

  removeOffice(id: number) {
    this.dialog.confirm({
      title: "Confirm delete?",
      content: "Are you sur to delete this office?"
    }).subscribe((confirm: boolean) => {
      if (confirm) {
        this.officeService
          .delete(id)
          .subscribe(() => {
            this._snackBar.open({ content: "office successfully deleted!!" });
            this.officeService.getAll().subscribe(offices => this.dataSource.data = offices)

          })
      }
    })

  }

  onCreate() {
    this._router.navigate(['admin', 'offices', 'new']).then();
  }

}
