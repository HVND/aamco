import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aamco-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent {
  @Input() form: FormGroup;

  shouldhideErrorOf(controlName): boolean {
    const {valid, pristine} = this.form.get(controlName);

    return valid || pristine;
  }
}
