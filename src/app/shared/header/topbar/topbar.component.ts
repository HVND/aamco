import { Component, Input } from '@angular/core';
import { NavigationItem } from '../navigation/navigation.interface';

@Component({
  selector: 'aamco-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() navigationItems: NavigationItem[];
}
