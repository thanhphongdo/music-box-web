import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';
import { SoundCloudService } from '@app/services';

@Component({
  selector: 'app-track-items',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() track: any;
  dataLoaded = false;
  isArtworkHover = false;
  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit(): void {
    this.loadTrack();
  }
  
  loadTrack() {
    this.soundCloudService.getTrackById(this.track.id).toPromise()
      .then(data => {
        this.dataLoaded = true;
        this.track = data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  convertMinus(duration: number) {
    const minus = Math.floor(duration / 60000);
    const second = Math.floor((duration - (minus*60000)) / 1000);
    return `${minus}:${second < 10 ? '0'+second.toString() : second.toString()}`;
  }

  replaceNameTrack(name: string, len: number = 35) {
    if (name.length > len) {
      let resultName = name.slice(0, len);
      return `${resultName}...`;
    } else return name;
  }

}
