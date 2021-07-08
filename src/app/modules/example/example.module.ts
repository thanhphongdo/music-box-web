import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ExampleModule { }
