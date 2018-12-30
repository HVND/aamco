import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AamcoApiService } from '../../core/services/aamco-api.service';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { AppointmentInput } from '../../core/dto/appointment';

@Component({
  selector: 'aamco-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formGroup: FormGroup;
  private loading = false;

  @HostBinding('class.main') readonly containerClass = true;

  constructor(private fb: FormBuilder,
              private aamcoApiService: AamcoApiService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      schedule: this.fb.group({
        'startDate': ['', [
          Validators.required]
        ],
        'startTime': ['', [
          Validators.required]
        ],
        'endDate': [''],
        'endTime': [''],
        'services': this.fb.group({
          'transmission': [],
          'vehicleMaintenance': [],
          'vehicleRapair': [],
          'other': [],
        })
      }),
      personalDetails: this.fb.group({
        'yearOfCar': ['', [
          Validators.minLength(0)]
        ],
        'car': ['', [
          Validators.maxLength(50)]
        ],
        'message': ['', [
          Validators.maxLength(255)]
        ],
        'firstName': ['', [
          Validators.required,
          Validators.maxLength(50)]
        ],
        'secondName': ['', [
          Validators.maxLength(50)
        ]],
        'email': ['', [
          Validators.required,
          Validators.maxLength(50),
          Validators.email]
        ],
        'telephone': ['', [
          Validators.minLength(0)]
        ]
      })
    });
  }

  /**
   * Finds and transforms all dates found in the provided object.
   * @param obj - an object whose dates should be transformed.
   */
  findAndTransformDatesToICOString<T>(obj: T): T {
    const copiedObj = Object.assign({}, obj);

    return Object.keys(copiedObj).reduce(
      (acc, key) => {
        acc[key] = copiedObj[key] instanceof Date ? copiedObj[key].toISOString() : copiedObj[key];

        return acc;
      },
      {}
    ) as T;
  }

  /**
   * Returns the processed appointment form data.
   */
  get processedAppointmentFormData(): AppointmentInput {
    const {personalDetails, schedule: {services, ...schedule}} = this.formGroup.value;
    const processedServices = Object.keys(services).filter(s => !!services[s]);
    const processedAppointmentFormData = {
      ...personalDetails,
      ...schedule,
      services: processedServices,
    } as AppointmentInput;

    return this.findAndTransformDatesToICOString<AppointmentInput>(processedAppointmentFormData);
  }

  /**
   * Invokes when the form is submitted.
   */
  onSubmit() {
    this.loading = true;

    this.aamcoApiService.submitAppointment(this.processedAppointmentFormData)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        this.succeedSubmitted.bind(this),
        this.errorSubmitted.bind(this)
      );
  }

  /**
   * Displays a success message on succeed submitted. Resets the form.
   */
  succeedSubmitted() {
    this.formGroup.reset();
    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Appointment submitted'});
  }

  /**
   * Displays an error message on request failure.
   */
  errorSubmitted() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong. Please, try later'});
  }
}
