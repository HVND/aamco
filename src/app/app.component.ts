import { Component } from '@angular/core';

@Component({
  selector: 'aamco-root',
  template: `
    <p-toast></p-toast>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
