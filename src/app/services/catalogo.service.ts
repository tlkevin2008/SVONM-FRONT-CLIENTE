import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  url = 'https://fantastic-waddle-xqxvxjw67p9h99x9-4000.app.github.dev/api/catalogos/';

  constructor(private http : HttpClient) { }

  getCatalogos(): Observable<any>{
    return this.http.get(this.url);
  }

}
