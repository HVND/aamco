import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../shared/header/navigation/navigation.interface';
import { navigationItems } from './appointment.constants';

@Component({
  selector: 'aamco-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  navigationItems: NavigationItem[];

  constructor() {
    this.navigationItems = navigationItems;
  }

  ngOnInit() {
  }

}
