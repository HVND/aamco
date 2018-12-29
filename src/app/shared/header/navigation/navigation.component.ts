import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from './navigation.interface';

@Component({
  selector: 'aamco-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigationItems: NavigationItem[];

  constructor() { }

  ngOnInit() {
  }
}
