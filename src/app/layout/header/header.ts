import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Import cái này
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
