import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageUpService {

  url = 'https://redesigned-fiesta-pq9p9xrv5xgh65vr-4000.app.github.dev/api/image/upload';  

  constructor(private http: HttpClient) { }

  uploadImage(image: Imagen): Observable<any> {

    return this.http.post(this.url, image);
  }
}