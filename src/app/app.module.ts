import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientBaseService,
  PlayerService,
  SoundCloudService,
  UserService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    HttpClientBaseService,
    SoundCloudService,
    UserService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
