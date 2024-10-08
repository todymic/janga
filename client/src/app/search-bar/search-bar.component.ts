import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {UtilsService} from "../utils.service";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  placeholder: string = "Selectionnez votre practicien";
  constructor(private router: Router, private utils: UtilsService) {
  }
  search(filter: string) {

    const slug = this.utils.slug(filter);

    this.router.navigate([slug])
  }




}
