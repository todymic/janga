import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatOption} from "@angular/material/core";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatOption,
    MatLabel,
    MatFormField,
    MatDrawerContent,
    MatDrawer,
    MatDrawerContainer,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnChanges {
  @ViewChild('drawer', {read: MatDrawer}) drawer: MatDrawer | undefined;
  @Input() toggleMenu!: boolean;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('toggleMenu' in changes) {
      this.drawer?.toggle(changes['toggleMenu'].currentValue)
    }
  }


}
