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
import { PlayerComponent } from './player/player.component';
import { PlayerInWebComponent } from './player-in-web/player-in-web.component';
import { PlayerInMobileComponent } from './player-in-mobile/player-in-mobile.component';
import { PlayerPopupComponent } from './player-popup/player-popup.component';
import { PlayerQueuePlaylistComponent } from './player-queue-playlist/player-queue-playlist.component';
import { PlayerQueueItemComponent } from './player-queue-item/player-queue-item.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { LibraryMenuComponent } from './library-menu/library-menu.component';
import { PopUpSongComponent } from './pop-up-song/pop-up-song.component';
import { PopUpAddTrackComponent } from './pop-up-add-track/pop-up-add-track.component';
import { ToastrComponent } from './toastr/toastr.component';

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
    PlayerComponent,
    PlayerInWebComponent,
    PlayerInMobileComponent,
    PlayerPopupComponent,
    PlayerQueuePlaylistComponent,
    PlayerQueueItemComponent,
    LibraryMenuComponent,
    PopUpSongComponent,
    PopUpAddTrackComponent,
    ToastrComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayscrollbarsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    SortablejsModule.forRoot({ animation: 150 }),
    SortablejsModule
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
    BackComponent,
    PlayerComponent,
    PlayerPopupComponent,
    BackComponent,
    LibraryMenuComponent,
    PopUpSongComponent,
    ToastrComponent
  ]
})
export class SharedModule { }
