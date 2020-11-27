import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor( private http: HttpClient ) { }

  getModel(idModel) {
    return this.http.get(`${environment.API_URL}/models/${idModel}`);
  }

  getAll() {
    return this.http.get(`${environment.API_URL}/models`);
  }

}
