import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomestayService } from '../../../../../../core/services/homestay/homestay.service';

@Component({
  selector: 'app-homestay-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homestay-header.html',
  styleUrl: './homestay-header.css',
})
export class HomestayHeader {
  homestay = computed(() => this.homestayService.currentHomestay());

  constructor(private homestayService: HomestayService) {}

  onShare() {
    if (navigator.share) {
      navigator.share({
        title: this.homestay()?.name,
        url: window.location.href
      });
    }
  }
}