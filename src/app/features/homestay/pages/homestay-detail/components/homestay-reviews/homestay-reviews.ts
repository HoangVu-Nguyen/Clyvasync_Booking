import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomestayService } from '../../../../../../core/services/homestay/homestay.service';


@Component({
  selector: 'app-homestay-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homestay-reviews.html',
  styleUrl: './homestay-reviews.css',
})
export class HomestayReviews {
  homestay = computed(() => this.homestayService.currentHomestay());
  
  // Lấy danh sách reviews từ Signal (Interface đã bao gồm thông tin user và photos)
  reviews = computed(() => this.homestayService.currentHomestay()?.reviews || []);

  // Tính toán số lượng review và điểm trung bình cho phần Header của section
  stats = computed(() => ({
    count: this.homestay()?.reviewCount || 0,
    rating: this.homestay()?.averageRating || 0
  }));

  constructor(private homestayService: HomestayService) {}

  /**
   * Hàm helper để tạo Avatar chữ cái đầu từ tên đầy đủ
   * VD: "Elena Voss" -> "EV"
   */
  getInitials(name: string | undefined): string {
    if (!name) return '??';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}