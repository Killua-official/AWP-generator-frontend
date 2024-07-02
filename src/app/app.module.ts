import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppComponent,
    FileUploadComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
