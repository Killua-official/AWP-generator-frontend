import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "../auth.service";
import {Title} from "@angular/platform-browser";

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

  constructor(private authService: AuthService, private modalService: NgbModal, private titleService: Title) {
    this.titleService.setTitle("Регистрация");
  }

  onSubmit() {
    if (!this.username || !this.email || !this.password) {
      this.showModal();
      return;
    }

    const registerData = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log('Register data submitted:', registerData);

    this.authService.register(this.username, this.email, this.password);
  }

  showModal() {
    const modalRef = this.modalService.open(ErrorModalContent);
    modalRef.componentInstance.message = 'Все поля должны быть заполнены!';
  }
}

@Component({
  selector: 'error-modal-content',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Ошибка</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>{{ message }}</p>
    </div>
    <div class="modal-footer">
    </div>
  `
})
export class ErrorModalContent {
  message: string = '';

  constructor(public modal: NgbActiveModal) {}
}
