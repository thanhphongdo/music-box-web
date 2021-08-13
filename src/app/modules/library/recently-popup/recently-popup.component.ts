import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-popup',
  templateUrl: './recently-popup.component.html',
  styleUrls: ['./recently-popup.component.scss']
})
export class RecentlyPopupComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
