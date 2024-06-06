import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url = 'http://localhost:4000/api/catalogos/';

  constructor(private http : HttpClient) { }

  getCatalogos(): Observable<any>{
    return this.http.get(this.url);
  }

}
