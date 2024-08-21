import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';

@Component({
  standalone: true,
  selector: 'app-my-image-cropper',
  templateUrl: './my-image-cropper.component.html',
  styleUrl: './my-image-cropper.component.css',
  imports: [ImageCropperComponent],
})
export class MyImageCropperComponent {
  imageChangeEvent: Event | null = null;
  croppedImage: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  onFileChange(event: Event): void {
    this.imageChangeEvent = event;
  }

  loadImageFailed() {
    throw new Error('Method not implemented.');
  }
  cropperReady() {
    throw new Error('Method not implemented.');
  }
  imageLoaded(event: LoadedImage) {
    throw new Error('Method not implemented.');
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
      event.objectUrl || event.base64 || ''
    );
  }
}
