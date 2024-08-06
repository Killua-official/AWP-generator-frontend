import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppComponent,
    FileUploadComponent,
    FormsModule,
    NgIf
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
