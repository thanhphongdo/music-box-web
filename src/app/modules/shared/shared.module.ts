import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './controls/date-picker/date-picker.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
