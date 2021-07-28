import { Component, OnInit } from '@angular/core';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SoundCloudService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-browse-details',
  templateUrl: './browse-details.component.html',
  styleUrls: ['./browse-details.component.scss']
})
export class BrowseDetailsComponent implements OnInit {

  tag = this.route.snapshot.paramMap.get('name');
  audio: any;
  tracks: Array<TrackInterface> = [];
  playlists: Array<PlayListInterface> = [];
  people: Array<SoundCloudUserInterface> = [];
  loadData = false;
  menuList = ['Overview','Playlists','Top Songs', 'Artists']
  selectedItem = this.menuList[0];

  osComponentOptions: OverlayScrollbars.Options = {
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      autoHide: 'scroll'
    }
  };

  constructor(
    private soundCloudService: SoundCloudService,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.sharedService.tabbarActive = false;
    this.sharedService.itemActive = 'Browse';
    this.sharedService.hideOnMobile = true;
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.pathname;
    this.sharedService.nameGenres = baseUrl.slice(8);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    forkJoin([
      this.soundCloudService.getTrack(this.tag, 30, 0),
      this.soundCloudService.getPlaylist(this.tag, 30, 0),
      this.soundCloudService.getPeople(this.tag, 30, 0)
    ]).subscribe(([tracks, playlists, people]) => {
      this.tracks = tracks.collection;
      this.playlists = playlists.collection;
      this.people = people.collection;
      this.loadData = true;
    })
  }

  openMenuList(item: any) {
    this.selectedItem = item
  }

  receiveTab($event) {
    this.selectedItem = $event
  }
  // getTrack() {
  //   this.soundCloudService.getTrack(this.tag, 10, 0).subscribe(data => {
  //     this.loadTrack = true;
  //     this.tracks = data.collection;
  //     console.log(this.tracks)
  //   }, err => {
  //     console.log(err);
  //   })
  // }

  // getPlayList() {
  //   this.soundCloudService.getPlaylist(this.tag, 10, 0).subscribe(data => {
  //     this.loadPlaylist = true;
  //     this.playlists = data.collection;
  //     console.log(this.playlists)
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  // getPeople() {
  //   this.soundCloudService.getPeople(this.tag, 10, 0).subscribe(data => {
  //     this.people = data.collection;
  //     console.log(this.people)
  //   }, err => {
  //     console.log(err)
  //   })
  // }
}
