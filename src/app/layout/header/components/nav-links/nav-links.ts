import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-links',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.css',
})
export class NavLinks {}
