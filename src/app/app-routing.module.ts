import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then(
      (m) => m.LandingModule
    )
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.module').then(
      (m) => m.ExampleModule
    )
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(
      (m) => m.HomeModule
    )
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(
      (m) => m.LoginModule
    )
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(
      (m) => m.SignupModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
