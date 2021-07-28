import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListInterface, TrackInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-search-playlists',
  templateUrl: './search-playlists.component.html',
  styleUrls: ['./search-playlists.component.scss']
})
export class SearchPlaylistsComponent implements OnInit {

  playlists: Array<PlayListInterface> = [];
  loadData: false;
  itemsPerPage = 30;
  name: string;
  p = 1;
  offset = -24;
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
    this.soundCloudService.searchPlaylist(this.name, 30, this.offset+=30).subscribe(data => {
      this.itemsPerPage += 30;
      this.playlists.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }

  onScrollDown() {
    this.getData();
  }
}
