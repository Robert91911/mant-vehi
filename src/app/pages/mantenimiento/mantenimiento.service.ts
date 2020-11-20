import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http: HttpClient) {}

  getAll(mantId: number) {
    return this.http.get(`${environment.API_URL}/mants/${mantId}`);
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
