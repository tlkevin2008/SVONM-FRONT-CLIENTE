import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url = 'https://fluffy-goldfish-xqxvxjw67v5h6g6g-4000.app.github.dev/api/productos/';     //http://localhost:4000/api/catalogos/

  constructor(private http : HttpClient) { }

  getCatalogos(): Observable<any>{
    return this.http.get(this.url);
  }

}
