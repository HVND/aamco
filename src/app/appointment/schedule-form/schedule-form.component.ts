import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aamco-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent {
  @Input() form: FormGroup;

  shouldShowErrorOf(controlName): boolean {
    const {invalid, dirty} = this.form.get('schedule').get(controlName);

    return invalid && dirty;
  }
}
