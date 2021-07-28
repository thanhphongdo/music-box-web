import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['./search-albums.component.scss']
})
export class SearchAlbumsComponent implements OnInit {

  @Input() albums: Array<PlayListInterface> = [];
  loadData: false;
  itemsPerPage = 30;
  name: string;
  p = 1;
  offset = 0;
  loading = false;

  constructor(private route: ActivatedRoute,private soundCloudService: SoundCloudService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.name = params.q;
      }
    );
  }

  getData() {
    this.loading = true;
    this.soundCloudService.searchAlbum(this.name, 30, this.offset+=30).subscribe(data => {
      this.itemsPerPage += 30;
      this.albums.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }

  onScrollDown() {
    this.getData();
  }
}
