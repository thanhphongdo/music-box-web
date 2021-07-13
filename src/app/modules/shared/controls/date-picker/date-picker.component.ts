import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements AfterViewInit {

  @ViewChild('datepicker') datepicker: ElementRef;

  @Input() default: string | Date | number;
  @Input() format: string = 'mm/dd/yyyy';

  @Output() onChange = new EventEmitter<{
    value: Date,
    date: string
  }>();

  datepicketCmp: any;

  constructor() { }

  ngAfterViewInit(): void {

    this.datepicketCmp = $(this.datepicker.nativeElement).datepicker({
      format: this.format
    }).on('changeDate', (event) => {
      this.onChange.emit({
        value: event.date,
        date: event.format()
      });
    });

    if (this.default) {
      $(this.datepicker.nativeElement).datepicker('setDate', new Date(this.default));
    }
  }

}
