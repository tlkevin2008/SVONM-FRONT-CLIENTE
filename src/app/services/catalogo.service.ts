import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url = 'https://redesigned-fiesta-pq9p9xrv5xgh65vr-4000.app.github.dev/api/catalogos/';     //http://localhost:4000/api/catalogos/

  constructor(private http : HttpClient) { }

  getCatalogos(): Observable<any>{
    return this.http.get(this.url);
  }

}
