// src/app/modal-dialog/modal-dialog.component.ts
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ModalDialogComponent {
  salary: string = '';
  identificationNumber: string = '';
  documentNumber: string = '';
  contractNumber: string = '';

  @Output() submitData = new EventEmitter<{ salary: string, identificationNumber: string, documentNumber: string, contractNumber: string }>();

  onSubmit() {
    if (this.salary && this.identificationNumber && this.documentNumber && this.contractNumber) {
      this.submitData.emit({
        salary: this.salary,
        identificationNumber: this.identificationNumber,
        documentNumber: this.documentNumber,
        contractNumber: this.contractNumber
      });
    } else {
      alert("Все поля должны быть заполнены!");
    }
  }
  closeModal() {
    this.showModal = false;
  }
  @Input() public showModal: boolean = false;
}
