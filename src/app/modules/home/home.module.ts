import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeBrowseComponent } from './home-browse/home-browse.component';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
