import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class FileUploadComponent implements OnInit {
  selectedFile?: File;
  uploadedFiles: string[] = [];

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
    const salary = prompt("Enter your salary: ");

    window.location.href = `/api/files/download-report?fileName=${file}&salary=${salary}`;
  }
}
