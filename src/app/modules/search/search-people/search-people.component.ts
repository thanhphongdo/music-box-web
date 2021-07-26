import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  people: Array<UserInterface> = [];
  loadData: false;
  itemsPerPage = 30;
  name: string;
  p = 1;
  offset = 0;
  loading = false;

  constructor(private route: ActivatedRoute,private soundCloudService: SoundCloudService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.name = params.q;
        this.getData()
        this.loading = true
      }
    );
  }

  getData() {
    this.soundCloudService.getPeople(this.name, 18, this.offset+=6).subscribe(data => {
      this.itemsPerPage += 30;
      this.people.push(...data.collection);
      this.loading = false;
      console.log(this.offset)
    }, err => {
      console.log(err)
    })
  }

  onScrollDown() {
    this.getData();
  }
}
