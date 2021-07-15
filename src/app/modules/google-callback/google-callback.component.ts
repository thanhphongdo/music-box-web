import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.scss']
})
export class GoogleCallbackComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(params => {
      this.userService.getGoogleAuthData(params.code).subscribe(data => {
        this.userService.linkUser({
          email: data.email,
          authData: {
            google: data.google
          }
        }).subscribe(data => {
          // console.log(data);
          this.router.navigate(['/home']);
        })
      })
    }).unsubscribe();
  }

  ngOnInit(): void {
  }

}
