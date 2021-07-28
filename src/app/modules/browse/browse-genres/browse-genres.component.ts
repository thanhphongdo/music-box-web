import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-browse-genres',
  templateUrl: './browse-genres.component.html',
  styleUrls: ['./browse-genres.component.scss']
})
export class BrowseGenresComponent implements OnInit {

  genres!: Array<any>

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.genres = [
      { image: "../../../../assets/images/browse/HIP - HOP.png", router: "/browse/hip-hop" },
      { image: "../../../../assets/images/browse/POP.png", router: "/browse/pop" },
      { image: "../../../../assets/images/browse/rock.png", router: "/browse/rock" },
      { image: "../../../../assets/images/browse/Country.png", router: "/browse/country" },
      { image: "../../../../assets/images/browse/DANCE - ELECTRO.png", router: "/browse/dance" },
      { image: "../../../../assets/images/browse/Indie.png", router: "/browse/indie" },
      { image: "../../../../assets/images/browse/LATIN.png", router: "/browse/latin" },
      { image: "../../../../assets/images/browse/K-POP.png", router: "/browse/k-pop" },
      { image: "../../../../assets/images/browse/METAl.png", router: "/browse/metal" },
      { image: "../../../../assets/images/browse/R&B.png", router: "/browse/r&b" },
      { image: "../../../../assets/images/browse/DECADES.png", router: "/browse/decades" },
      { image: "../../../../assets/images/browse/Classical.png", router: "/browse/classical" },
      { image: "../../../../assets/images/browse/JAZZ.png", router: "/browse/jazz" },
      { image: "../../../../assets/images/browse/Instrumentals.png", router: "/browse/instrusmentals" },
      { image: "../../../../assets/images/browse/PUNK.png", router: "/browse/punk" },
      { image: "../../../../assets/images/browse/BLUES.png", router: "/browse/blues" },
      { image: "../../../../assets/images/browse/SOUL FUNK.png", router: "/browse/soul" },
      { image: "../../../../assets/images/browse/REGGAE.png", router: "/browse/reggae" },
    ]
  }
}
