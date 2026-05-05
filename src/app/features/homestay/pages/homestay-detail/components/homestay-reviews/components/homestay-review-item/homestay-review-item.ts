import { Component, Input } from '@angular/core';
import { ReviewResponse } from '../../../../../../../../core/models/response/review.response';
import { CommonModule, DatePipe } from '@angular/common'; // Thêm DatePipe
@Component({
  selector: 'app-homestay-review-item',
  imports: [CommonModule],
  templateUrl: './homestay-review-item.html',
  styleUrl: './homestay-review-item.css',
})
export class HomestayReviewItem {
  @Input({ required: true }) review!: ReviewResponse;
  @Input({ required: true }) index!: number;

  getInitials(name: string | undefined): string {
    if (!name) return '??';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  }
}
