import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor( private http: HttpClient ) {}

  getAll() {
    return this.http.get(`${environment.API_URL}/types`);
  }
}
