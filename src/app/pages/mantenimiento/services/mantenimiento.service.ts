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

  //Obtiene todos los mantenimientos de la base de datos
  getAll(mantId: number) {
    return this.http.get(`${environment.API_URL}/mants/${mantId}`);
  }

  //Obtener un solo un mantenimiento, sirve para cuando se edita un mantenimiento (rellena el formulario)
  getById(id: number) {
    return this.http.get(`${environment.API_URL}/mants/one/${id}`);
  }

  //Edita un mantenimiento
  updateMant(id: string|number, updateVehicle: Mantenimiento) {
    return this.http.patch(`${environment.API_URL}/mants/${id}`, updateVehicle);
  }

  //Guarda un mantenimiento nuevo
  saveMant(vehiculo : Mantenimiento) {
    return this.http.post(`${environment.API_URL}/mants`, vehiculo);
  }

  //Borra un mantenimiento
  deleteMant(id: string) {
    return this.http.delete(`${environment.API_URL}/mants/${id}`);
  }

  //Manejador de errores, al obtener los datos desde la base de datos
  handlerError(error): Observable<never> {
    let errorMessage = 'Error unknown';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
