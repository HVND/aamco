import { NgModule } from '@angular/core';
import { ButtonDirective } from './button/button.directive';
import { TopbarComponent } from './header/topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareUsComponent } from './share-us/share-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonDirective,
    HeaderComponent,
    TopbarComponent,
    NavigationComponent,
    FooterComponent,
    ShareUsComponent
  ],
  declarations: [
    ButtonDirective,
    HeaderComponent,
    TopbarComponent,
    NavigationComponent,
    FooterComponent,
    ShareUsComponent
  ]
})
export class SharedModule {
}
