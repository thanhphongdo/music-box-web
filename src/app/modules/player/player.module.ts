import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { SharedModule } from '../shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TrackItemComponent } from './track-item/track-item.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    PlayerComponent,
    TrackItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayscrollbarsModule,
    SharedModule,
    NgxSliderModule
  ],
  exports: [
    TrackItemComponent
  ]
})
export class PlayerModule { }
