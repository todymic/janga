import { Component } from '@angular/core';
import {ListComponent} from "../page/list/list.component";

@Component({
  selector: 'app-speciality-list',
  standalone: true,
  imports: [],
  templateUrl: '../page/list/list.component.html',
  styleUrl: './speciality-list.component.scss'
})
export class SpecialityListComponent extends ListComponent {
  override displayedColumns: string[] = ['id', 'name', 'action'];


}
