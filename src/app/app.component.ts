import { Component } from '@angular/core';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  previewUrl = '';

  serverURL: string = '';
  loading: boolean = false;
  selectFile!: File;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    if (event.target.files) {
      this.selectFile = event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(this.selectFile);
      reader.onload = (event: any) => {
        this.previewUrl = event.target.result;
      };
    }
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.selectFile);
    this.fileUploadService.upload(this.selectFile).subscribe((response) => {
      //console.log(response);
      this.serverURL = response.link;
      this.loading = false;
    });
  }
}
