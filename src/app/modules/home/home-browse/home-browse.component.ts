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
        router: "/browse/hip-hop"
      },
      {
        image: "../../../../assets/images/browse/POP.png",
        router: "/browse/pop"
      },
      {
        image: "../../../../assets/images/browse/rock.png",
        router: "/browse/rock"
      },
      {
        image: "../../../../assets/images/browse/Country.png",
        router: "/browse/country"
      },
      {
        image: "../../../../assets/images/browse/DANCE - ELECTRO.png",
        router: "/browse/dance"
      },
      {
        image: "../../../../assets/images/browse/Indie.png",
        router: "/browse/indie"
      },
    ]
  }

}
