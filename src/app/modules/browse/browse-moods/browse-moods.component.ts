import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-moods',
  templateUrl: './browse-moods.component.html',
  styleUrls: ['./browse-moods.component.scss']
})
export class BrowseMoodsComponent implements OnInit {

  moods!: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.moods = [
      { image: "../../../../assets/images/moods/PARTY.png", router: "#" },
      { image: "../../../../assets/images/moods/CHILL.png", router: "#" },
      { image: "../../../../assets/images/moods/WORKOUT.png", router: "#" },
      { image: "../../../../assets/images/moods/FOCUS.png", router: "#" },
      { image: "../../../../assets/images/moods/DRIVING.png", router: "#" },
      { image: "../../../../assets/images/moods/RAINY DAY.png", router: "#" },
      { image: "../../../../assets/images/moods/ROMANCE.png", router: "#" },
      { image: "../../../../assets/images/moods/SLEEP.png", router: "#" },
      { image: "../../../../assets/images/moods/COMEDY.png", router: "#" },
      { image: "../../../../assets/images/moods/FAMILY.png", router: "#" },
      { image: "../../../../assets/images/moods/DINNER.png", router: "#" },
      { image: "../../../../assets/images/moods/TRAVEL.png", router: "#" },
    ]
  }

}
