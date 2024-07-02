import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Probador } from '../models/probador';

@Injectable({
  providedIn: 'root'
})
export class ProbadorService {
  url = 'https://fantastic-waddle-xqxvxjw67p9h99x9-4000.app.github.dev/api/probador/'

  constructor(private http: HttpClient) { }

  guardarProbador(probador: Probador): Observable<any> {
    return this.http.post(this.url, probador);
  }
}
