import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
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
