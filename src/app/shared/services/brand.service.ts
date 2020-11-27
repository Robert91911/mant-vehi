import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Brand } from '@app/shared/models/brand.interface'

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get(`${environment.API_URL}/brand`);
  }

  getMarca(idMarca) {
    return this.http.get(`${environment.API_URL}/vehicles/one/${idMarca}`);
  }

   handlerError(error): Observable<never> {
    let errorMessage = 'Error unknown';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
