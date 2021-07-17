import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-release',
  templateUrl: './overview-release.component.html',
  styleUrls: ['./overview-release.component.scss']
})
export class OverviewReleaseComponent implements OnInit {

  @Input() tracks;

  releases = [
    {name: "V", artist: "The Vegabonds", release: "18/01/2019", router: "#" ,image:"../../../../assets/images/details/releases/Image 574.png" },
    {name: "Powerwolf", artist: "Metallum Nostrum", release: "11/01/2019", router: "#", image:"../../../../assets/images/details/releases/Image 575.png" },
    {name: "Glastonbury 2000", artist: "David Bowie", release: "30/11/2018", router: "#", image:"../../../../assets/images/details/releases/Image 576.png" },
    {name: "Of Death And Sin", artist: "Final Breath", release: "11/19/2018", router: "#", image:"../../../../assets/images/details/releases/Image 854.png" },
    {name: "50 Years - Don't Stop", artist: "Fleetwood Mac", release: "16/11/2018", router: "#", image:"../../../../assets/images/details/releases/Image 855.png" },
    {name: "Sunlight Tonight", artist: "Parker Gispert", release: "16/11/2018", router: "#", image:"../../../../assets/images/details/releases/Image 856.png" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
