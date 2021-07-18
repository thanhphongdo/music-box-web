import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-artists',
  templateUrl: './overview-artists.component.html',
  styleUrls: ['./overview-artists.component.scss']
})
export class OverviewArtistsComponent implements OnInit {

  @Input() people

  artists = [
    {name: "The Beatles", heart: "871,189", router: "#", image: "../../../../assets/images/details/artists/The Beatles.png"},
    {name: "Queen", heart: "948,117", router: "#", image: "../../../../assets/images/details/artists/Queen.png"},
    {name: "David Bowie", heart: "490,451", router: "#", image: "../../../../assets/images/details/artists/Bowie.png"},
    {name: "Iggy Pop", heart: "471,145", router: "#", image: "../../../../assets/images/details/artists/Iggy Pop.png"},
    {name: "Kurt Cobain", heart: "699,228", router: "#", image: "../../../../assets/images/details/artists/Kurt.png"},
    {name: "Lou Reed", heart: "429,222", router: "#", image: "../../../../assets/images/details/artists/Lou Reed.png"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
