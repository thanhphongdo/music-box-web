import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClientBaseService } from './httpclient.base.service';
import { peopleResultInterface, PlayListInterface, playlistResultInterface, SearchResultInterface, SoundCloudUserInterface, TrackInterface, trackResultInterface } from 'src/app/models';
import { Track } from 'hls.js';

@Injectable()
export class SoundCloudService {
  constructor(private httpService: HttpClientBaseService) { }

  searchEveryting(term: string, limit: number, offset: number): Observable<SearchResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_searchEverything', {
      term,
      limit,
      offset
    }).pipe(map((res: any) => {
      return res.result;
    }));
  }

  getHLS(url: string): Observable<{ url: string }> {
    return this.httpService.post(environment.apiUrl + '/functions/_getHLS', {
      url
    }).pipe(map((res: any) => {
      return res.result;
    }));
  }

  mixedSelections(url: string): Observable<SearchResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_mixedSelections', {
      url
    }).pipe(map((res: any) => {
      return res.result;
    }));
  }

  getTrack(tag: string, limit: number, offset: number): Observable<trackResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_popularTrackByTag', {
      tag,
      limit,
      offset
    }).pipe(map((res: trackResultInterface) => {
      return res.result;
    }))
  }

  getTrackById(id: number): Observable<trackResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_trackById', {
      id
    }).pipe(map((res: trackResultInterface) => {
      return res.result;
    }))
  }

  getPlaylist(tag: string, limit: number, offset: number): Observable<playlistResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_playlistByTag', {
      tag,
      limit,
      offset
    }).pipe(map((res: playlistResultInterface) => {
      return res.result;
    }))
  }

  getPlaylistById(id: number): Observable<playlistResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_playlistById', {
      id
    }).pipe(map((res: playlistResultInterface) => {
      return res.result;
    }))
  }

  getPeople(tag: string, limit: number, offset: number): Observable<peopleResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_userByTag', {
      tag,
      limit,
      offset
    }).pipe(map((res: peopleResultInterface) => {
      return res.result;
    }))
  }

  searchTrack(term: string, limit: number, offset: number): Observable<trackResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_searchTracks', {
      term,
      limit,
      offset
    }).pipe(map((res: trackResultInterface) => {
      return res.result;
    }))
  }

  searchPlaylist(term: string, limit: number, offset: number): Observable<playlistResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_searchPlaylists', {
      term,
      limit,
      offset
    }).pipe(map((res: playlistResultInterface) => {
      return res.result;
    }))
  }

  searchPeople(term: string, limit: number, offset: number): Observable<peopleResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_searchUsers', {
      term,
      limit,
      offset
    }).pipe(map((res: peopleResultInterface) => {
      return res.result;
    }))
  }

  searchAlbum(term: string, limit: number, offset: number): Observable<playlistResultInterface> {
    return this.httpService.post(environment.apiUrl + '/functions/_searchAlbums', {
      term,
      limit,
      offset
    }).pipe(map((res: playlistResultInterface) => {
      return res.result;
    }))
  }
}
