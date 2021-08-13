import { Component, OnInit } from '@angular/core';
import { LibraryService } from '@app/services/library.service';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }
  listRecentlyPlayed: any;

  ngOnInit(): void {
    this.getListRecentlyPlayed()
  }

  getListRecentlyPlayed() {
    this.libraryService.getListRecentlyPlayed('').subscribe(data => {
      this.listRecentlyPlayed = data.today as any;
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
}
