import {Component, EventEmitter, Output} from '@angular/core';
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconButton,
    MatIcon,
    MatButton,
    MatAnchor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu: boolean = false;
  @Output() toggleMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onMenuClick() {
    this.toggleMenu = !this.toggleMenu;
    this.toggleMenuChange.emit(this.toggleMenu);
  }
}
