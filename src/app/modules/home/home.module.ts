import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeBrowseComponent } from './home-browse/home-browse.component';
import { PlaylistCellComponent } from './playlist-cell/playlist-cell.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeBrowseComponent,
    PlaylistCellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
