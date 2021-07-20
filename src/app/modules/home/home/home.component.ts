import { Component, OnInit } from '@angular/core';
import { PlayListInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { OverlayScrollbarsComponent } from "ngx-overlayscrollbars";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataLoaded = false;
  relaxList = {};
  partyList = {};
  studyList = {};
  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.soundCloudService
      .mixedSelections('http://localhost:1337')
      .subscribe(result => {
        this.dataLoaded = true;
        this.relaxList = result.collection[2];
        this.partyList = result.collection[1];
        this.studyList = result.collection[0];
        console.log(result);
    })
  }
}
