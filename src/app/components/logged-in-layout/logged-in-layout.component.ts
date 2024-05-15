import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-logged-inlayout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './logged-in-layout.component.html',
  styleUrl: './logged-in-layout.component.css',
})
export class LoggedInLayoutComponent {}
