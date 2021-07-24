import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePickerComponent } from './controls/date-picker/date-picker.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { BackgroundRandomComponent } from './background-random/background-random.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    TrackItemComponent,
    PlaylistItemComponent,
    BackgroundRandomComponent,
    InputSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayscrollbarsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    TrackItemComponent,
    PlaylistItemComponent,
    BackgroundRandomComponent,
    InputSearchComponent
  ]
})
export class SharedModule { }
