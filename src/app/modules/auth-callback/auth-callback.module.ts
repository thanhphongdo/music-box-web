import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleCallbackComponent } from './google-callback/google-callback.component';

const routes: Routes = [
  {
    path: 'google-callback',
    component: GoogleCallbackComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    GoogleCallbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthCallbackModule { }
