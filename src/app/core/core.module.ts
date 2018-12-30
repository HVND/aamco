import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { AamcoApiService } from './services/aamco-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MessageService,
    AamcoApiService
  ]
})
export class CoreModule {
}
