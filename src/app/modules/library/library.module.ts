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
import { RecentlyPlayedComponent } from './recently-played/recently-played.component';
import { RecentlyPopupComponent } from './recently-popup/recently-popup.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountPasswordComponent } from './account-password/account-password.component';

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
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [],
  }
];

@NgModule({
  declarations: [
    LibraryComponent,
    LibraryMenuMbComponent,
    MyPlaylistComponent,
    FavoriteSongsComponent,
    ListeningHistoryComponent,
    RecentlyPlayedComponent,
    RecentlyPopupComponent,
    AccountComponent,
    AccountFormComponent,
    AccountPasswordComponent
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
