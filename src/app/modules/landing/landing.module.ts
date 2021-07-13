import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingScreen1Component } from './landing-screen1/landing-screen1.component';
import { LandingScreen2Component } from './landing-screen2/landing-screen2.component';
import { LandingScreen3Component } from './landing-screen3/landing-screen3.component';
import { LandingScreen4Component } from './landing-screen4/landing-screen4.component';
import { LandingScreen5BenefitComponent } from './landing-screen5-benefit/landing-screen5-benefit.component';
import { LandingScreen5PriceComponent } from './landing-screen5-price/landing-screen5-price.component';

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
    LandingScreen3Component,
    LandingScreen4Component,
    LandingScreen5BenefitComponent,
    LandingScreen5PriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule { }
