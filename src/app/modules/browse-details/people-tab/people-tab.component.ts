import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '@app/models';
import { SoundCloudService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-tab',
  templateUrl: './people-tab.component.html',
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent implements OnInit {
  @Input() people: Array<UserInterface> = [];
  @Input() loadData: boolean;

  tag = this.route.snapshot.paramMap.get('name');
  offset = 0;
  loading = false;
  itemsPerPage = 30;
  p = 1;

  constructor(private soundCloudService: SoundCloudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onScrollDown() {
    this.loading = true;
    this.soundCloudService.getPeople(this.tag, 30, this.offset+=30).subscribe(data => {
      this.itemsPerPage += 30;
      this.people.push(...data.collection);
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }
}
