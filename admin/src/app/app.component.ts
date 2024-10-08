import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./components/footer/footer.component";
import {MatDrawerContainer, MatSidenav} from "@angular/material/sidenav";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MatSidenav,
    MatDrawerContainer,
    MatFormField,
    MatSelect,
    MatOption,
    SidebarComponent
  ],
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'admin';
  toggleMenu: boolean = false;

  onToogleMenuChange(event: boolean) {
    this.toggleMenu = event;
  }
}
