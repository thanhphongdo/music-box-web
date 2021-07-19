import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowseDetailsComponent } from './browse-details/browse-details.component';
import { DetailsNavComponent } from './details-nav/details-nav.component';
import { OverviewArtistsComponent } from './overview-artists/overview-artists.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    SharedModule
  ]
})
export class BrowseDetailsModule { }
