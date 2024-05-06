import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen = false;

  isScrolled = false;

  isScrolledCategoriesMenu = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
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
