import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Vehicle} from '@app/shared/models/vehicle.interface'

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getAll(userId: number) {
    return this.http.get(`${environment.API_URL}/vehicles/${userId}`);
  }

  getById(vehicleId: number) {
    return this.http.get(`${environment.API_URL}/vehicles/one/${vehicleId}`);
  }

  saveVehicle(vehiculo : Vehicle) {
    return this.http.post(`${environment.API_URL}/vehicles`, vehiculo);
  }

  updateVehicle(id: string|number, updateVehicle: Vehicle) {
    return this.http.patch(`${environment.API_URL}/vehicles/${id}`, updateVehicle);
  }

  deleteVehicle(id: string) {
    return this.http.delete(`${environment.API_URL}/vehicles/${id}`);
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
