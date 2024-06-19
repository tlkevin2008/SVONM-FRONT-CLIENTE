import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from '../models/diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  url = 'https://cuddly-acorn-v6p7g5xrj7jj24vv-4000.app.github.dev/api/diagnosticos/'

  constructor(private http: HttpClient) { }

  guardarDiagnostico(diagnostico: Diagnostico): Observable<any> {
    return this.http.post(this.url, diagnostico);
  }
}
