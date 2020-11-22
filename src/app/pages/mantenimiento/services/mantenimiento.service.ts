import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Mantenimiento } from '@app/shared/models/mant.interface';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http: HttpClient) {}

  getAll(mantId: number) {
    return this.http.get(`${environment.API_URL}/mants/${mantId}`);
  }

  getById(id: number) {
    return this.http.get(`${environment.API_URL}/mants/one/${id}`);
  }

  updateMant(id: string|number, updateVehicle: Mantenimiento) {
    return this.http.patch(`${environment.API_URL}/mants/${id}`, updateVehicle);
  }

  saveMant(vehiculo : Mantenimiento) {
    return this.http.post(`${environment.API_URL}/mants`, vehiculo);
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
