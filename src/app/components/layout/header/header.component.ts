import { Component, HostListener } from '@angular/core';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authService/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CategoriesMenuComponent,
    MatDividerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;
  isLoggedIn = false;
  userProfile: any = null;
  // dropdownOpen = false;

  // toggleDropdown(): void {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  logout(): void {
    this.authService.logout();
  }

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((status) => {
      this.isLoggedIn = status;
    });
    this.authService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
      console.log('mahmut', this.userProfile);
      console.log(this.userProfile.name);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 100;
    this.isScrolled = window.scrollY > threshold;
    console.log(window.scrollY);
  }
}
