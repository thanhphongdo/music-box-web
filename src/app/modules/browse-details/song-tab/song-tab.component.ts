import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';
import { SoundCloudService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-tab',
  templateUrl: './song-tab.component.html',
  styleUrls: ['./song-tab.component.scss']
})
export class SongTabComponent implements OnInit {
  @Input() tracks: Array<TrackInterface> = [];
  @Input() loadData: boolean;

  tag = this.route.snapshot.paramMap.get('name');
  offset = 0;
  loading = false;
  itemsPerPage = 30;
  p = 1;

  constructor(private soundCloudService: SoundCloudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onScrollDown() {
    this.loading = true;
    this.soundCloudService.getTrack(this.tag, 30, this.offset+=30).subscribe(data => {
      this.itemsPerPage += 30;
      this.tracks.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }
}
