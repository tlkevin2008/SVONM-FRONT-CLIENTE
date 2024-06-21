import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from '../models/diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  url = 'https://redesigned-fiesta-pq9p9xrv5xgh65vr-4000.app.github.dev/api/diagnosticos/'

  constructor(private http: HttpClient) { }

  guardarDiagnostico(diagnostico: Diagnostico): Observable<any> {
    return this.http.post(this.url, diagnostico);
  }
}
