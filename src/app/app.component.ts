import { Component } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FileUploadComponent]
})
export class AppComponent {
  title = 'file-upload-app';
}
