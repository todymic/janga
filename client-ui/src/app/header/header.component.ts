import {Component, Input} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgOptimizedImage} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";


interface Link {
  isActive: boolean
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatNavList,
    NgOptimizedImage,
    MatListItem,
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    FlexModule,
    FlexLayoutModule,
    RouterLinkActive,
    FlexLayoutServerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  link: string = 'tertert';
}
