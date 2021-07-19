import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseDetailsComponent } from './browse-details/browse-details.component';
import { DetailsNavComponent } from './details-nav/details-nav.component';
import { OverviewPlaylistComponent } from './overview-playlist/overview-playlist.component';
import { OverviewReleaseComponent } from './overview-release/overview-release.component';
import { OverviewArtistsComponent } from './overview-artists/overview-artists.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { BackgroundComponent } from './background/background.component';

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
    OverviewPlaylistComponent,
    OverviewReleaseComponent,
    OverviewArtistsComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule
  ]
})
export class BrowseDetailsModule { }
