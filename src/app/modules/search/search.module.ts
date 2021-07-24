import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
