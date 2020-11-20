import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Vehicle, VehicleResponse } from '@app/shared/models/vehicle.interface'

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getAll(userId: number) {
    return this.http.get(`${environment.API_URL}/vehicles/${userId}`);
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
