import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Probador } from '../models/probador';

@Injectable({
  providedIn: 'root'
})
export class ProbadorService {
  url = 'http://localhost:4000/api/probador/'

  constructor(private http: HttpClient) { }

  guardarProbador(probador: Probador): Observable<any> {
    return this.http.post(this.url, probador);
  }
}
