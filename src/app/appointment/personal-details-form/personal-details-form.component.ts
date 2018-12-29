import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aamco-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss']
})
export class PersonalDetailsFormComponent {
  @Input() form: FormGroup;

  shouldShowErrorOf(controlName): boolean {
    const {invalid, dirty} = this.form.get(controlName);

    return invalid && dirty;
  }
}
