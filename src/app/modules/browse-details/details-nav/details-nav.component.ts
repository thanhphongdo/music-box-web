import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-nav',
  templateUrl: './details-nav.component.html',
  styleUrls: ['./details-nav.component.scss']
})
export class DetailsNavComponent implements OnInit {
  @Input() title

  constructor() { }

  ngOnInit(): void {
  }

}
