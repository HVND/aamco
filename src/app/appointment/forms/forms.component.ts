import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aamco-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      schedule: this.fb.group({
        'startDate': [''],
        'startTime': [''],
        'endDate': [''],
        'endTime': ['']
      }),
      personalDetails: this.fb.group({
        'yearOfCar': ['', [
          Validators.required,
          Validators.minLength(0)]
        ],
        'car': ['', [
          Validators.required,
          Validators.maxLength(50)]
        ],
        'message': ['', [
          Validators.required,
          Validators.maxLength(255)]
        ],
        'firstName': ['', [
          Validators.required,
          Validators.maxLength(50)]
        ],
        'secondName': ['', [
          Validators.required,
          Validators.maxLength(50)
        ]],
        'email': ['', [
          Validators.required,
          Validators.maxLength(50),
          Validators.email]
        ],
        'telephone': ['', [
          Validators.required,
          Validators.minLength(0)]
        ]
      })
    });
  }

  onSubmit() {
  }
}
