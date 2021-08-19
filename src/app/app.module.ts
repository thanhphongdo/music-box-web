import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientBaseService,
  PlayerService,
  SoundCloudService,
  UserService
} from './services';
import { ToastrComponent } from './modules/shared/toastr/toastr.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: ToastrComponent,
      positionClass: 'toast-bottom-left',
    }),
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
