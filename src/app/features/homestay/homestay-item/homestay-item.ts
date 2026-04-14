import { Component, Input, OnInit } from '@angular/core';
import {  HomestayResponse } from '../../../core/models/response/homestay.response';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-homestay-item',
  imports: [CommonModule],
  templateUrl: './homestay-item.html',
  styleUrl: './homestay-item.css',
})
export class HomestayItem implements OnInit {
  @Input() homestay!: HomestayResponse;
  @Input() layoutType: number = 0; 
  coverImage: string = '';
  ngOnInit() {
    this.setCoverImage();
  }
  private setCoverImage() {
    if (this.homestay.images && this.homestay.images.length > 0) {
      this.coverImage = this.homestay.images[0];
    } else {
      this.coverImage = 'assets/images/homestay-placeholder.jpg'; 
    }
  }
}
