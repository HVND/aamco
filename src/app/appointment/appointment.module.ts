import { NgModule } from '@angular/core';
import { AppointmentComponent } from './appointment.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DropdownModule
  ],
  declarations: [
    AppointmentComponent,
    FormsComponent,
    ScheduleFormComponent,
    PersonalDetailsFormComponent
  ],
  exports: [
    FormsComponent
  ]
})
export class AppointmentModule {
}
