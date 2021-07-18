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
      { image: "../../../../assets/images/moods/PARTY.png", router: "/browse/party" },
      { image: "../../../../assets/images/moods/CHILL.png", router: "/browse/chill" },
      { image: "../../../../assets/images/moods/WORKOUT.png", router: "/browse/workout" },
      { image: "../../../../assets/images/moods/FOCUS.png", router: "/browse/focus" },
      { image: "../../../../assets/images/moods/DRIVING.png", router: "/browse/driving" },
      { image: "../../../../assets/images/moods/RAINY DAY.png", router: "/browse/rainy-day" },
      { image: "../../../../assets/images/moods/ROMANCE.png", router: "/browse/romance" },
      { image: "../../../../assets/images/moods/SLEEP.png", router: "/browse/sleep" },
      { image: "../../../../assets/images/moods/COMEDY.png", router: "/browse/comedy" },
      { image: "../../../../assets/images/moods/FAMILY.png", router: "/browse/family" },
      { image: "../../../../assets/images/moods/DINNER.png", router: "/browse/dinner" },
      { image: "../../../../assets/images/moods/TRAVEL.png", router: "/browse/travel" },
    ]
  }

}
