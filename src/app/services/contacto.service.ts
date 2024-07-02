import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'https://fluffy-goldfish-xqxvxjw67v5h6g6g-4000.app.github.dev/api/contactos/';

  constructor(private http: HttpClient) { }

  guardarContacto(contacto: Contacto): Observable<any>{
    return this.http.post(this.url, contacto);
  }
}
