import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {UtilsService} from "../utils.service";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule,
    RouterOutlet
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  typePractitioner!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route = inject(ActivatedRoute);
  }

  @Input()
  set practitioners(practitionerId: string) {

    this.typePractitioner = practitionerId;
  }

  select(id: number) {
    this.router.navigate([this.typePractitioner + '/'+ id], { replaceUrl: true })
  }

}
