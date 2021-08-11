import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { LibraryMenuMbComponent } from './library-menu-mb/library-menu-mb.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { FavoriteSongsComponent } from './favorite-songs/favorite-songs.component';
import { ListeningHistoryComponent } from './listening-history/listening-history.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    canActivate: [],
  },
  {
    path: 'playlists',
    component: MyPlaylistComponent,
    canActivate: [],
  },
  {
    path: 'history',
    component: ListeningHistoryComponent,
    canActivate: [],
  },
  {
    path: 'favorite-songs',
    component: FavoriteSongsComponent,
    canActivate: [],
  }
];

@NgModule({
  declarations: [
    LibraryComponent,
    LibraryMenuMbComponent,
    MyPlaylistComponent,
    FavoriteSongsComponent,
    ListeningHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LibraryModule { }