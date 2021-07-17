import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-details',
  templateUrl: './browse-details.component.html',
  styleUrls: ['./browse-details.component.scss']
})
export class BrowseDetailsComponent implements OnInit {

  populars = [
    { name: "Workout Rock", image: "../../../../assets/images/details/WORKOUT rock.png", heart: "414,228", router: "#"},
    { name: "Love Rock", image: "../../../../assets/images/details/LOVE ROCK.png", heart: "98,284", router: "#"},
    { name: "Rockabilly", image: "../../../../assets/images/details/ROCKABILLY.png", heart: "82,127", router: "#"},
    { name: "80s Rock Anthems", image: "../../../../assets/images/details/80s ROCK.png", heart: "381,737", router: "#"},
    { name: "Soft Rock", image: "../../../../assets/images/details/SOFT ROCK.png", heart: "859,919", router: "#"},
    { name: "Glam Rock", image: "../../../../assets/images/details/GLAM ROCK.png", heart: "74,414", router: "#"},
  ]

  playlists = [
    { name: "Pop Rock", image: "../../../../assets/images/details/POP ROCK.png", heart: "420,112", router: "#"},
    { name: "Woodstock Legends", image: "../../../../assets/images/details/Woodstock Legends.png", heart: "64,199", router: "#"},
    { name: "Guitar Solos", image: "../../../../assets/images/details/GUITAR SOLOS.png", heart: "299,154", router: "#"},
    { name: "70s Rock Anthems", image: "../../../../assets/images/details/70s ROCK.png", heart: "387,722", router: "#"},
    { name: "Rock Ballads", image: "../../../../assets/images/details/ROCK ballads.png", heart: "160,896", router: "#"},
    { name: "The New Alt", image: "../../../../assets/images/details/NEW ALT.png", heart: "698,233", router: "#"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
