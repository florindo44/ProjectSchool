import { Component, Input } from '@angular/core';
import { SidenavService } from '@app/services/sidenav.service';
import { MENU_ITEM } from '../../model/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {
  @Input() shadow = false;
  @Input() popText = false;
  @Input() menuTitle = '';
  @Input() menuItems: MENU_ITEM[] = [];

  constructor() {}

}
