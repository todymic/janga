import {Component, inject, OnInit} from '@angular/core';
import {Practitioner} from "../../core/interfaces/practitioner.interface";
import {PractitionerService} from "../../core/services/practitioner.service";
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  practitionerService: PractitionerService = inject(PractitionerService);
  practitioners!: Practitioner[];

  ngOnInit(): void {
    this.practitionerService.getAll().subscribe(practitioners => this.practitioners = practitioners)
  }



}
