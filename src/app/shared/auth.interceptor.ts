import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

//интерсептор для обработок ошибок сервера при запросах без авторизации
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      //если авторизован - то добавляем токен к каждому запросу: изменяем объект реквеста (переопределяем)
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          console.log('Ошибка интерсептора');
          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['/login'], {
              queryParams: {
                authFailed: true
              }
            })
          }
          return throwError(error)
        })
      )
  }

}
