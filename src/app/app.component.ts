import { Component } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FileUploadComponent, HeaderComponent, RouterOutlet],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
})
export class AppComponent {
  title = 'file-upload-app';
  theme: string = 'dark';
}
