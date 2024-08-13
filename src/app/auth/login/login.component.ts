import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService){}

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password
    };
    console.log('Login data submitted:', loginData);

    this.authService.login(this.username, this.password);
  }
}
