import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButton,
    MatAnchor,
    MatCheckbox,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnChanges {

  @ViewChild('sidenav', {read: MatSidenav}) sidenav!: MatSidenav ;
  // @Input() isMenuOpened!: boolean;
  @Input() opened!: boolean;
  events: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if( 'opened' in changes) {
      this.sidenav?.toggle(changes['opened'].currentValue)
    }
  }

}
