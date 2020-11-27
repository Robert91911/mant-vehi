import { AuthService } from '@auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleInterceptorService implements HttpInterceptor {

  constructor(private authSvc: AuthService) { }

  //Este método intercepta cualquier ruta que no sea login, y le inyecta el token de autentificación
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!req.url.includes('login')) {
      console.log("Interceptor")
      const userValue = this.authSvc.userValue;
      const authReq = req.clone({
        setHeaders: {
          auth: userValue.token,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
