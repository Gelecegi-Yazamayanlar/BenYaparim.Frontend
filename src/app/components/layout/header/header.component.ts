import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authService/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;

  isScrolledCategoriesMenu = false;

  isLoggedIn = false;
  userProfile = null;

  dropdownOpen = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.authService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 100;
    const categoryThreshold = 200;
    this.isScrolled = window.scrollY > threshold;

    this.isScrolledCategoriesMenu = window.scrollY > categoryThreshold;
    console.log(window.scrollY);
  }
}
