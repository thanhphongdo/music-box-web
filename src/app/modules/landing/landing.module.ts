import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingScreen1Component } from './landing-screen1/landing-screen1.component';
import { LandingScreen2Component } from './landing-screen2/landing-screen2.component';
import { LandingScreen3Component } from './landing-screen3/landing-screen3.component';

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
    LandingScreen1Component,
    LandingScreen2Component,
    LandingScreen3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule { }
