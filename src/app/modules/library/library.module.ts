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
import { ListeningHistoryViewComponent } from './listening-history-view/listening-history-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListeningPopUpComponent } from './listening-pop-up/listening-pop-up.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListeningHistoryItemComponent } from './listening-history-item/listening-history-item.component';
import { ListeningHistoryItemMbComponent } from './listening-history-item-mb/listening-history-item-mb.component';
import { MyPlaylistCreateComponent } from './my-playlist-create/my-playlist-create.component';
import { MyPlaylistItemComponent } from './my-playlist-item/my-playlist-item.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { MyPlaylistDetailComponent } from './my-playlist-detail/my-playlist-detail.component';
import { RecommendSongComponent } from './recommend-song/recommend-song.component';
import { MyPlaylistEditComponent } from './my-playlist-edit/my-playlist-edit.component';
import { MyPlaylistPopupComponent } from './my-playlist-popup/my-playlist-popup.component';

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
    path: 'playlists/:id',
    component: MyPlaylistDetailComponent,
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
    AccountPasswordComponent,
    ListeningHistoryViewComponent,
    ListeningPopUpComponent,
    ListeningHistoryItemComponent,
    ListeningHistoryItemMbComponent,
    MyPlaylistCreateComponent,
    MyPlaylistItemComponent,
    MyPlaylistDetailComponent,
    RecommendSongComponent,
    MyPlaylistEditComponent,
    MyPlaylistPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    OverlayscrollbarsModule,
  ]
})
export class LibraryModule { }
