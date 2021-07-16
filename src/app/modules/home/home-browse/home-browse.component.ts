import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-browse',
  templateUrl: './home-browse.component.html',
  styleUrls: ['./home-browse.component.scss']
})
export class HomeBrowseComponent implements OnInit {

  genres!: Array<any>
  constructor() { }

  ngOnInit(): void {
    this.genres = [
      {
        image: "../../../../assets/images/browse/HIP - HOP.png",
        router: "#"
      },
      {
        image: "../../../../assets/images/browse/POP.png",
        router: "#"
      },
      {
        image: "../../../../assets/images/browse/rock.png",
        router: "#"
      },
      {
        image: "../../../../assets/images/browse/Country.png",
        router: "#"
      },
      {
        image: "../../../../assets/images/browse/DANCE - ELECTRO.png",
        router: "#"
      },
      {
        image: "../../../../assets/images/browse/Indie.png",
        router: "#"
      },
    ]
  }

}
