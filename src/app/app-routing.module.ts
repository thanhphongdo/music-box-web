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
    path: 'browse',
    loadChildren: () => import('./modules/browse/browse.module').then(
      (m) => m.BrowseModule
    )
  },
  {
    path: 'browse/:name',
    loadChildren: () => import('./modules/browse-details/browse-details.module').then(
      (m) => m.BrowseDetailsModule
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
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth-callback/auth-callback.module').then(
      (m) => m.AuthCallbackModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
