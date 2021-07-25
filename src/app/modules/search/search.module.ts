import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchPlaylistsComponent } from './search-playlists/search-playlists.component';
import { SearchTracksComponent } from './search-tracks/search-tracks.component';
import { SearchPeopleComponent } from './search-people/search-people.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchPlaylistsComponent,
    SearchTracksComponent,
    SearchPeopleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InfiniteScrollModule,
    NgxPaginationModule
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
