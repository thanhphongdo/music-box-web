import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClientBaseService } from './httpclient.base.service';
import { SearchResultInterface } from 'src/app/models';

@Injectable()
export class SoundCloudService {
    constructor(private httpService: HttpClientBaseService) { }

    searchEveryting(term: string, limit: number, offset: number): Observable<SearchResultInterface> {
        return this.httpService.post(environment.apiUrl + '/functions/_searchEverything', {
            term,
            limit,
            offset,
            _ApplicationId: environment.applicationId
        }).pipe(map((res: any) => {
            return res.result;
        }));
    }

    getHLS(url: string): Observable<{url: string}> {
        return this.httpService.post(environment.apiUrl + '/functions/_getHLS', {
            url,
            _ApplicationId: environment.applicationId
        }).pipe(map((res: any) => {
            return res.result;
        }));
    }
}
