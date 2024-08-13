import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const registerData = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log('Register data submitted:', registerData);

    this.authService.register(this.username, this.email, this.password);
  }
}
