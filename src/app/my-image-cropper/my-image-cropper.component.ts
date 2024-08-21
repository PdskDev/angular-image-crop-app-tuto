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
  loading = false;
  showCropper = false;

  processImageFile(event: Event) {
    const reader = new FileReader();

    reader.onload = () => {
      this.loading = true;
    };
  }

  constructor(private sanitizer: DomSanitizer) {}

  onFileChange(event: Event): void {
    this.loading = true;
    this.imageChangeEvent = event;
  }

  loadImageFailed() {
    console.error('Load image failed');
  }
  cropperReady() {
    this.loading = false;
  }
  imageLoaded(event: LoadedImage) {
    this.showCropper = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
      event.objectUrl || event.base64 || ''
    );

    console.log(event);
  }
}
