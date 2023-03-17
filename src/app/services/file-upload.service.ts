import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  baseApiUrl = 'https://file.io';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, 'IMG-0000001');
    return this.http.post(this.baseApiUrl, formData);
  }

  getImage(serverURL: string) {
    return this.http.get(serverURL);
  }
}
