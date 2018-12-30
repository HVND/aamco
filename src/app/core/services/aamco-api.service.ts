import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppointmentInput } from '../dto/appointment';

@Injectable()
export class AamcoApiService {
  /**
   * Submits a new appointment.
   */
  submitAppointment(appointment: AppointmentInput): Observable<any> {
    return of(appointment).pipe(delay(3000));
  }

  /**
   * Sign ups for special offers.
   * @param email - a user email to sign up with.
   */
  signUp(email: string): Observable<any> {
    return of(email).pipe(delay(3000));
  }
}
