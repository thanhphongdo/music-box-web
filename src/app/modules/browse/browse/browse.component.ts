import { Component, OnInit } from '@angular/core';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  tabbarItem: string;

  constructor(private soundCloudService: SoundCloudService, private sharedService: SharedService) {
    this.sharedService.itemActive = "Browse";
    this.sharedService.tabbarActive = true;
    this.sharedService.tabbarItem = 'Genres & Moods'
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.tabbarItem = this.sharedService.tabbarItem;
  }
}
