import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-box-web';
  hideOnMobile: boolean;
  showPlayerPopup: boolean = false;

  constructor(private sharedService: SharedService){}

  ngAfterContentChecked() {
    this.hideOnMobile = this.sharedService.hideOnMobile;
  }

  onHidePlayerPopup(show: boolean) {
    this.showPlayerPopup = show;
  }
  oneShowPlayerPopup(show: boolean) {
    this.showPlayerPopup = show
  }
}
