import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  @Input()  item: any;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }
}
