import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingScreen1Component } from './landing-screen1/landing-screen1.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    LandingComponent,
    LandingScreen1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule { }
