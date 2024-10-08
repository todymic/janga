import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleMenu: boolean = false;

  @Output() toggleMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  onMenuClicked() {

    this.toggleMenu = !this.toggleMenu;

    this.toggleMenuChange.emit(this.toggleMenu);

  }
}
