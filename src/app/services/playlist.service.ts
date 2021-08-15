import { Injectable } from '@angular/core';
import { listPlaylist, Playlist, RequestCreatePlaylist } from '@app/models/interfaces/playlist';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClientBaseService } from './httpclient.base.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private httpService: HttpClientBaseService) { }

  createPlaylist(playlist: RequestCreatePlaylist): Observable<Playlist> {
    return this.httpService.post(environment.apiUrl + '/functions/savePlaylist', playlist).pipe(map((res: any) => {
      return res.result;
    }));
  }

  getMyPlaylist(): Observable<listPlaylist> {
    return this.httpService.post(environment.apiUrl + '/functions/getMyPlaylist', null).pipe(map((res: any) => {
      return res.result;
    }));
  }
}
