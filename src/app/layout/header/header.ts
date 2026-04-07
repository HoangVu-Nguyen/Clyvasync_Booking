import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Import cái này
import { SearchBar } from './components/search-bar/search-bar';
import { MessengerWidget } from './components/messenger-widget/messenger-widget';
import { MenuWidget } from './components/menu-widget/menu-widget';
import { UserMenu } from './components/user-menu/user-menu';
import { NotificationWidget } from './components/notification-widget/notification-widget';
@Component({
  selector: 'app-header',
  imports: [RouterLink,SearchBar,MessengerWidget,MenuWidget,UserMenu,NotificationWidget],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
