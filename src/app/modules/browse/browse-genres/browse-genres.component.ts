import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-genres',
  templateUrl: './browse-genres.component.html',
  styleUrls: ['./browse-genres.component.scss']
})
export class BrowseGenresComponent implements OnInit {

  genres!: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.genres = [
      { image: "../../../../assets/images/browse/HIP - HOP.png", router: "#" },
      { image: "../../../../assets/images/browse/POP.png", router: "#" },
      { image: "../../../../assets/images/browse/rock.png", router: "#" },
      { image: "../../../../assets/images/browse/Country.png", router: "#" },
      { image: "../../../../assets/images/browse/DANCE - ELECTRO.png", router: "#" },
      { image: "../../../../assets/images/browse/Indie.png", router: "#" },
      { image: "../../../../assets/images/browse/LATIN.png", router: "#" },
      { image: "../../../../assets/images/browse/K-POP.png", router: "#" },
      { image: "../../../../assets/images/browse/METAl.png", router: "#" },
      { image: "../../../../assets/images/browse/R&B.png", router: "#" },
      { image: "../../../../assets/images/browse/DECADES.png", router: "#" },
      { image: "../../../../assets/images/browse/Classical.png", router: "#" },
      { image: "../../../../assets/images/browse/JAZZ.png", router: "#" },
      { image: "../../../../assets/images/browse/Instrumentals.png", router: "#" },
      { image: "../../../../assets/images/browse/PUNK.png", router: "#" },
      { image: "../../../../assets/images/browse/BLUES.png", router: "#" },
      { image: "../../../../assets/images/browse/SOUL FUNK.png", router: "#" },
      { image: "../../../../assets/images/browse/REGGAE.png", router: "#" },

    ]
  }

}
