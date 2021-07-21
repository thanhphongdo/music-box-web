import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowseDetailsComponent } from './browse-details/browse-details.component';
import { DetailsNavComponent } from './details-nav/details-nav.component';
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
    DetailsNavComponent,
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
    SharedModule
  ]
})
export class BrowseDetailsModule { }
