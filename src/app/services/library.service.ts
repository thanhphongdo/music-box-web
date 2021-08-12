import { Injectable } from '@angular/core';
import { listRecentlyPlayed, RecentlyPlayed, RequestRecentlyPlayed } from 'src/app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClientBaseService } from './httpclient.base.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpService: HttpClientBaseService) { }

  saveRecentlyPlayed(item: RequestRecentlyPlayed): Observable<RecentlyPlayed> {
    return this.httpService.post(environment.apiUrl + '/functions/saveRecentlyPlayed', item).pipe(map((res: any) => {
      return res.result;
    }));
  }

  getListRecentlyPlayed(params: any): Observable<listRecentlyPlayed> {
    return this.httpService.post(environment.apiUrl + '/functions/listRecentlyPlayed', params).pipe(map((res: any) => {
      return res.result;
    }));
  }
}
