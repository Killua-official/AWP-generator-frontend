import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  getCurrentRoute(): string {
    return this.router.url;
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }
}
