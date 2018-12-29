import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ButtonDirective } from './button/button.directive';

@NgModule({
  imports: [
    HeaderModule
  ],
  exports: [
    HeaderModule,
    ButtonDirective
  ],
  declarations: [ButtonDirective]
})
export class SharedModule {
}
