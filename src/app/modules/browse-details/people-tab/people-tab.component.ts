import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '@app/models';

@Component({
  selector: 'app-people-tab',
  templateUrl: './people-tab.component.html',
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent implements OnInit {
  @Input() people: Array<UserInterface> = [];
  @Input() loadData: boolean;

  itemsPerPage = 18;
  p = 1;
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollDown() {
    setTimeout(x => {
      this.itemsPerPage += 12
      this.loading = false
    }, 1000)
  }

}
