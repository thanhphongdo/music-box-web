import { Component, OnInit } from '@angular/core';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SoundCloudService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

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

  loadPlaylist = false;
  loadTrack = false;


  osComponentOptions: OverlayScrollbars.Options = {
    sizeAutoCapable : true,
	  paddingAbsolute : true,
  	scrollbars : {
	  	autoHide : 'scroll'
	  }
  };

  constructor(private soundCloudService: SoundCloudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlayList();
    this.getTrack();
    this.getPeople();
  }

  getTrack() {
    this.soundCloudService.getTrack(this.tag, 10, 0).subscribe(data => {
      this.loadTrack = true;
      this.tracks = data.collection;
      console.log(this.tracks)
    }, err => {
      console.log(err);
    })
  }

  getPlayList() {
    this.soundCloudService.getPlaylist(this.tag, 10, 0).subscribe(data => {
      this.loadPlaylist = true;
      this.playlists = data.collection;
      console.log(this.playlists)
    }, err => {
      console.log(err)
    })
  }

  getPeople() {
    this.soundCloudService.getPeople(this.tag, 10, 0).subscribe(data => {
      this.people = data.collection;
      console.log(this.people)
    }, err => {
      console.log(err)
    })
  }
}
