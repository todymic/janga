import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, FormsModule, MatButton, NgOptimizedImage, HomeComponent, MatNavList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-ui';
}
