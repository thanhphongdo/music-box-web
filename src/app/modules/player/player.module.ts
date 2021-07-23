import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    SharedModule,
  ]
})
export class PlayerModule { }
