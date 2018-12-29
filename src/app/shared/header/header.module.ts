import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    NavigationComponent,
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderModule { }
