import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from '../models/diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  url = 'https://fantastic-waddle-xqxvxjw67p9h99x9-4000.app.github.dev/api/diagnosticos/'

  constructor(private http: HttpClient) { }

  guardarDiagnostico(diagnostico: Diagnostico): Observable<any> {
    return this.http.post(this.url, diagnostico);
  }
}
