import { Component, Input, OnInit } from '@angular/core';
import { SoundCloudService } from 'src/app/services';
import { PlayListInterface } from '@app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-tab',
  templateUrl: './playlist-tab.component.html',
  styleUrls: ['./playlist-tab.component.scss']
})
export class PlaylistTabComponent implements OnInit {
  @Input() playlists: Array<PlayListInterface> = [];
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
    this.soundCloudService.getPlaylist(this.tag, 30, this.offset+=30).subscribe(data => {
      this.itemsPerPage += 30;
      this.playlists.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }
}
