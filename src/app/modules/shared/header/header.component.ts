import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  showBg: boolean;

  ngOnInit(): void {
    this.headerBg()
  }

  headerBg() {
    window.location.href === 'http://localhost:4200/' ? this.showBg = true : this.showBg = false;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
