import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './controls/date-picker/date-picker.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { BackgroundRandomComponent } from './background-random/background-random.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    TrackItemComponent,
    PlaylistItemComponent,
    BackgroundRandomComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayscrollbarsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    TrackItemComponent,
    PlaylistItemComponent,
    BackgroundRandomComponent
  ]
})
export class SharedModule { }
