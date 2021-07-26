import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.scss']
})
export class SearchTracksComponent implements OnInit {

  tracks: Array<TrackInterface> = [];
  loadData: false;
  itemsPerPage = 30;
  name: string;
  p = 1;
  offset = -12;
  loading = false;

  constructor(private route: ActivatedRoute,private soundCloudService: SoundCloudService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.name = params.q;
        this.getData()
        this.loading = true
      }
    );
  }

  getData() {
    this.soundCloudService.getTrack(this.name, 18, this.offset+=18).subscribe(data => {
      this.itemsPerPage += 30;
      this.tracks.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }

  onScrollDown() {
    this.getData();
  }
}
