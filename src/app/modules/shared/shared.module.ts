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
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { BackComponent } from './back/back.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

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
    TabBarComponent,
    NavbarMenuComponent,
    TabMenuComponent,
    BackComponent,
    PlayerBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayscrollbarsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    TrackItemComponent,
    PlaylistItemComponent,
    BackgroundRandomComponent,
    InputSearchComponent,
    TabBarComponent,
    NavbarMenuComponent,
    PlayerBarComponent,
    BackComponent
  ]
})
export class SharedModule { }
