import { Component, Input } from '@angular/core';
import { NavigationItem } from './navigation.interface';

@Component({
  selector: 'aamco-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() navigationItems: NavigationItem[];
}
