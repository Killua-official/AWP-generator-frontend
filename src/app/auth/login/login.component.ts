import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../auth.service";
import {Title} from "@angular/platform-browser";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgbAlert]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showAlert: boolean = false;

  constructor(private authService: AuthService, private titleService: Title){
    this.titleService.setTitle("Авторизация");
  }

  onCloseAlert() {
    this.showAlert = false;
  }

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password
    };
    console.log('Login data submitted:', loginData);

    this.authService.login(this.username, this.password, () => {
      this.showAlert = true;
    });
  }

  protected readonly close = close;
  protected readonly alert = alert;
}
