import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {

  @ViewChild('dropdown') dropdown: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    $(this.dropdown.nativeElement).dropdown();
    $(this.dropdown.nativeElement).mouseover(function(){
      console.log(121212)
    });
  }

  hide() {
    $(this.dropdown.nativeElement).dropdown('hide');
  }

  show() {
    $(this.dropdown.nativeElement).dropdown('hide');
  }

  toggle() {
    $(this.dropdown.nativeElement).dropdown('toggle');
  }

}
