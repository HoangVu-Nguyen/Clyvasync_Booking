import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { NavLinks } from './components/nav-links/nav-links';
import { SearchBar } from './components/search-bar/search-bar';
import { UserProfile } from './components/user-profile/user-profile';
@Component({
  selector: 'app-header',
  imports: [RouterLink,NavLinks,SearchBar,UserProfile],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
