import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowseDetailsComponent } from './browse-details/browse-details.component';
import { OverviewArtistsComponent } from './overview-artists/overview-artists.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { OverviewTabComponent } from './overview-tab/overview-tab.component';
import { PlaylistTabComponent } from './playlist-tab/playlist-tab.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { SongTabComponent } from './song-tab/song-tab.component';
import { PeopleTabComponent } from './people-tab/people-tab.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseDetailsComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    BrowseDetailsComponent,
    OverviewArtistsComponent,
    OverviewTabComponent,
    PlaylistTabComponent,
    TabLayoutComponent,
    SongTabComponent,
    PeopleTabComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    SharedModule,
    InfiniteScrollModule,
    NgxPaginationModule
  ]
})
export class BrowseDetailsModule { }
