import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageUpService {

  url = 'http://localhost:4000/api/image/upload';  

  constructor(private http: HttpClient) { }

  uploadImage(image: Image): Observable<any> {

    return this.http.post(this.url, image);
  }
}