import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpClientBaseService {
  constructor(private http: HttpClient, private router: Router) { }

  buildHeader(opts: any): { [key: string]: any } {

    const user = JSON.parse(localStorage.getItem('user'))!;
    const token = user ? user.sessionToken : '';

    let header: any = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': environment.applicationId,
      'X-Parse-Session-Token': token
    };

    // if (token) {
    //   header.Authorization = token;
    // }

    if (opts && opts.header) {
      header = {
        ...header,
        ...opts.header
      };
    }
    const options = {
      headers: new HttpHeaders(header),
      responseType: 'json',
      observe: 'response',
      ...(opts || {})
    };
    return options;
  }

  handleError(err: HttpErrorResponse): Observable<any> {
    console.log('API ERROR:');
    return throwError(
      err.error || {
        status: 500,
        message: 'Server error'
      }
    );
  }

  // get2(url){
  //   return this.http.get(url).pipe(map((res: HttpResponse<any>)=>{
  //     return null;
  //   }))
  // }

  get<T>(url: string, opts?: any): Observable<T> {
    return this.http.get(url, this.buildHeader(opts)).pipe(
      map((res) => {
        return res as any;
      }),
      catchError(err => this.handleError(err))
    );
  }

  post<T>(url: string, params: any, opts?: any): Observable<T> {
    return this.http.post(url, params || {}, this.buildHeader(opts)).pipe(
      map((res: any) => {
        return res.body;
      }),
      catchError(err => this.handleError(err))
    );
  }

  // post<T>(url: string, params: any, opts?: any): Observable<T> {
  //   return this.http.post(url, params || {}, this.buildHeader(opts)).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     }),
  //     catchError(err => this.handleError(err))
  //   );
  // }

  // put<T>(url: string, params: any, opts?: any): Observable<T> {
  //   return this.http.put(url, params || {}, this.buildHeader(opts)).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     }),
  //     catchError(err => this.handleError(err))
  //   );
  // }

  // delete<T>(url: string, opts?: any): Observable<T> {
  //   return this.http.delete(url, this.buildHeader(opts)).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     }),
  //     catchError(err => this.handleError(err))
  //   );
  // }

  // patch<T>(url: string, params: any, opts?: any): Observable<T> {
  //   return this.http.patch(url, params, this.buildHeader(opts)).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     }),
  //     catchError(err => this.handleError(err))
  //   );
  // }

  // head<T>(url: string, opts?: any): Observable<T> {
  //   return this.http.head(url, this.buildHeader(opts)).pipe(catchError(err => this.handleError(err)));
  // }
}
