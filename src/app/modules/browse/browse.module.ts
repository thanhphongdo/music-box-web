import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BrowseGenresComponent } from './browse-genres/browse-genres.component';
import { BrowseMoodsComponent } from './browse-moods/browse-moods.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    BrowseComponent,
    BrowseGenresComponent,
    BrowseMoodsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BrowseModule { }
