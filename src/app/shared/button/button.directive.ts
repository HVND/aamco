import { Directive, HostBinding, Input } from '@angular/core';

type ButtonType = 'default' | 'primary' | 'info';

@Directive({
  selector: '[aamcoButton]'
})
export class ButtonDirective {
  @Input('aamcoButton') type: ButtonType = 'default';

  @HostBinding('class.button') readonly buttonClass = true;

  @HostBinding('class.button_default')
  get defaultButton(): boolean {
    return !this.type || this.type === 'default';
  }

  @HostBinding('class.button_primary')
  get primaryButton(): boolean {
    return this.type === 'primary';
  }

  @HostBinding('class.button_info')
  get infoButton(): boolean {
    return this.type === 'info';
  }
}
