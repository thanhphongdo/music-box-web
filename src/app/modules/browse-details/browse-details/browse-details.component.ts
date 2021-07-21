import { Component, OnInit } from '@angular/core';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SoundCloudService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

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

  menuList = ['Overview','Playlists','Top Songs', 'Artist']
  selectedItem = this.menuList[0];

  osComponentOptions: OverlayScrollbars.Options = {
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      autoHide: 'scroll'
    }
  };

  constructor(private soundCloudService: SoundCloudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    forkJoin([
      this.soundCloudService.getTrack(this.tag, 10, 0),
      this.soundCloudService.getPlaylist(this.tag, 12, 0),
      this.soundCloudService.getPeople(this.tag, 10, 0)
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
