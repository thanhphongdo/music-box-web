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

  constructor(private soundCloudService: SoundCloudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTrack();
    this.getPlayList();
    this.getPeople();
  }

  getTrack() {
    this.soundCloudService.getTrack(this.tag, 10, 0).subscribe(data => {
      this.tracks = data.collection;
      console.log(this.tracks)
    }, err => {
      console.log(err);
    })
  }

  getPlayList() {
    this.soundCloudService.getPlaylist(this.tag, 10, 0).subscribe(data => {
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


  populars = [
    { name: "Workout Rock", image: "../../../../assets/images/details/WORKOUT rock.png", heart: "414,228", router: "#"},
    { name: "Love Rock", image: "../../../../assets/images/details/LOVE ROCK.png", heart: "98,284", router: "#"},
    { name: "Rockabilly", image: "../../../../assets/images/details/ROCKABILLY.png", heart: "82,127", router: "#"},
    { name: "80s Rock Anthems", image: "../../../../assets/images/details/80s ROCK.png", heart: "381,737", router: "#"},
    { name: "Soft Rock", image: "../../../../assets/images/details/SOFT ROCK.png", heart: "859,919", router: "#"},
    { name: "Glam Rock", image: "../../../../assets/images/details/GLAM ROCK.png", heart: "74,414", router: "#"},
  ]

}
