// src/app/file-upload/file-upload.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf, NgIf} from "@angular/common";
import { ModalDialogModule } from '../modal-dialog/modal-dialog.module';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ModalDialogModule
  ]
})
export class FileUploadComponent implements OnInit {
  selectedFile?: File;
  uploadedFiles: string[] = [];
  showModal: boolean = false;
  fileToDownload: string = '';

  @ViewChild(ModalDialogModule) modalDialog!: ModalDialogModule;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUploadedFiles();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile!, this.selectedFile!.name);

    this.http.post('/api/files/upload', uploadData)
      .subscribe(response => {
        console.log(response);
        this.fetchUploadedFiles();
      });
  }

  fetchUploadedFiles() {
    this.http.get<string[]>('/api/files')
      .subscribe(files => {
        this.uploadedFiles = files;
      });
  }

  onDownload(file: string) {
    window.location.href = `/api/files/download?fileName=${file}`;
  }

  onDownloadABP(file: string) {
    this.fileToDownload = file;
    this.showModal = true;
  }

  handleModalSubmit(data: { salary: string, identificationNumber: string, documentNumber: string, contractNumber: string }) {
    this.showModal = false;
    window.location.href = `/api/files/download-report?fileName=${this.fileToDownload}&salary=${data.salary}&iin=${data.identificationNumber}&docNumber=${data.documentNumber}&contractNumber=${data.contractNumber}`;
  }
}
