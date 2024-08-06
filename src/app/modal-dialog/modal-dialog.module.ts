// src/app/modal-dialog/modal-dialog.module.ts
import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalDialogComponent } from './modal-dialog.component';

@NgModule({
  declarations: [ModalDialogComponent],
  imports: [CommonModule, FormsModule, NgIf],
  exports: [ModalDialogComponent]
})
export class ModalDialogModule {}
