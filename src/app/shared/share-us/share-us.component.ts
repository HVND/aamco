import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AamcoApiService } from '../../core/services/aamco-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'aamco-share-us',
  templateUrl: './share-us.component.html',
  styleUrls: ['./share-us.component.scss']
})
export class ShareUsComponent implements OnInit {
  emailControl: FormControl;
  loading = false;

  constructor(private aamcoApiService: AamcoApiService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.setupFormGroup();
  }

  setupFormGroup() {
    this.emailControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
  }

  onSubmit() {
    this.loading = true;

    this.aamcoApiService.signUp(this.emailControl.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        this.succeedSubmitted.bind(this),
        this.errorSubmitted.bind(this)
      );
  }

  /**
   * Returns true if the emailControl is invalid.
   */
  get isInvalidAndDirty(): boolean {
    const {invalid, dirty} = this.emailControl;

    return invalid && dirty;
  }

  /**
   * Displays a success message on succeed submitted. Resets the emailControl.
   */
  succeedSubmitted() {
    this.emailControl.reset();
    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Sign up successful'});
  }

  /**
   * Displays an error message on request failure.
   */
  errorSubmitted() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong. Please, try later'});
  }
}
