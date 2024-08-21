import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyImageCropperComponent } from './my-image-cropper/my-image-cropper.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyImageCropperComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
