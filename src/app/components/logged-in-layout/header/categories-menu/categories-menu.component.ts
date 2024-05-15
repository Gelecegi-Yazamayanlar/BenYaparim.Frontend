import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  imports: [],
  templateUrl: './categories-menu.component.html',
  styleUrl: './categories-menu.component.css',
})
export class CategoriesMenuComponent {
  isScrolledCategoriesMenu = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const categoryThreshold = 200;

    this.isScrolledCategoriesMenu = window.scrollY > categoryThreshold;
  }
}
