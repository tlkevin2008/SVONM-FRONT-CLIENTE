import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url = 'https://cuddly-acorn-v6p7g5xrj7jj24vv-4000.app.github.dev/api/catalogos/';

  constructor(private http : HttpClient) { }

  getCatalogos(): Observable<any>{
    return this.http.get(this.url);
  }

}
