import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BrowseGenresComponent } from './browse-genres/browse-genres.component';

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
    BrowseGenresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BrowseModule { }
