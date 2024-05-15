import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoggedInLayoutComponent } from './components/logged-in-layout/logged-in-layout.component';
import { AuthService } from './services/authService/auth.service';

// import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    LoggedInLayoutComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}

  isLoggedIn = false;
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn; // Burada `isLoggedIn` boolean bir değerdir.
    });
  }

  title = 'benyaparim-frontend';
}
