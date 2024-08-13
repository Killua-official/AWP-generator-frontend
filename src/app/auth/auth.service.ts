import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string, errorCallback: () => void): void {
    localStorage.setItem('token', 'your-jwt-token');
    this.http.post<any>('/api/auth/login', {username, password}).subscribe((response) => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']).then();
      }
      else {
        errorCallback();
      }
    },
      errorCallback);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']).then();
      return null;
    }

    const decodedToken: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']).then();
      return null;
    }

    return token;
  }

  register(username: string, email: string, password: string) {
    this.http.post<any>('/api/auth/register', {username, email, password}).subscribe((response) => {
      this.router.navigate(['/login']).then();
    });
  }
}
