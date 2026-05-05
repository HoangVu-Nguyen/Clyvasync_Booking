import { Component } from '@angular/core';
import { NavLinks } from './components/nav-links/nav-links';
import { SearchBar } from './components/search-bar/search-bar';
import { UserProfile } from './components/user-profile/user-profile';
@Component({
  selector: 'app-header',
  imports: [NavLinks,SearchBar,UserProfile],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
