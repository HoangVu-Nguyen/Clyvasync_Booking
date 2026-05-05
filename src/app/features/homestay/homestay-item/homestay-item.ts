import { ChangeDetectorRef, Component, Input, OnInit, signal } from '@angular/core';
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
  
  currentImgIndex = signal(0);
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.setCoverImage();
  }

  private setCoverImage() {
    if (this.homestay?.images && this.homestay.images.length > 0) {
      this.coverImage = this.homestay.images[0];
    } else {
      this.coverImage = 'assets/images/homestay-placeholder.jpg'; 
    }
  }

  startImageSequence() {
    if (!this.homestay?.images || this.homestay.images.length <= 1) return;
    if (this.intervalId) return;

    // CHUẨN APP HIỆN ĐẠI: 1.5 giây đổi ảnh 1 lần
    this.intervalId = setInterval(() => {
      this.currentImgIndex.update(idx => (idx + 1) % this.homestay.images.length);
      this.cdr.markForCheck(); 
    }, 1500); 
  }

  stopImageSequence() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.currentImgIndex.set(0); 
    this.cdr.markForCheck();
  }
}