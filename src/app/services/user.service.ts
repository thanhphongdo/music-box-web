import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClientBaseService } from './httpclient.base.service';
import { UserInterface, RequestSignUpUserInterface, RequestLogInUserInterface, RequestUpdateUserInterface, RequestUpdatePasswordInteface, RequestGetUserByIdInteface } from 'src/app/models';

@Injectable()
export class UserService {
  constructor(private httpService: HttpClientBaseService) { }

  signUp(user: RequestSignUpUserInterface): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_signUp', user).pipe(map((res: any) => {
      localStorage.setItem('user', JSON.stringify(res.result));
      return res.result;
    }));
  }

  login(user: RequestLogInUserInterface): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/login', user).pipe(map((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      return res.result;
    }));
  }

  logout() {
    return this.httpService.post(environment.apiUrl + '/logout', null).pipe(map((res: any) => {
      localStorage.removeItem('user');
      return res.result;
    }))
  }

  getCurrentUser(): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_getCurrentUser', null).pipe(map((res: any) => {
      return res.result;
    }));
  }

  updatePasswordUser(password: RequestUpdatePasswordInteface): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_updatePasswordUser', password).pipe(map((res: any) => {
      return res.result;
    }));
  }

  updateUser(user: RequestUpdateUserInterface): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_updateUser', user).pipe(map((res: any) => {
      return res.result;
    }));
  }

  linkUser(user: RequestLogInUserInterface): Observable<UserInterface> {
    return this.httpService.post(environment.apiUrl + '/users', user).pipe(map((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      return res.result;
    }));
  }

  getGoogleUrl() {
    return this.httpService.post(environment.apiUrl + '/functions/_googleLogin', {}).pipe(map((res: any) => {
      return res.result;
    }));
  }

  getGoogleAuthData(code) {
    return this.httpService.post(environment.apiUrl + '/functions/_googleAuthData', { code }).pipe(map((res: any) => {
      return res.result;
    }));
  }
}
