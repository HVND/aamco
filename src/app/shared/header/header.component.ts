import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from './navigation/navigation.interface';

@Component({
  selector: 'aamco-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navigationItems: NavigationItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
