import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomestayService } from '../../../../../../core/services/homestay/homestay.service';

@Component({
  selector: 'app-homestay-booking-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homestay-booking-widget.html',
  styleUrl: './homestay-booking-widget.css',
})
export class HomestayBookingWidget {
  // Lấy dữ liệu homestay hiện tại
  homestay = computed(() => this.homestayService.currentHomestay());

  // Giả định logic chọn ngày (Vũ có thể tích hợp thư viện lịch sau)
  nights = signal(5);
  serviceFee = signal(150);

  // Tính toán số tiền tự động
  subtotal = computed(() => (this.homestay()?.basePrice || 0) * this.nights());
  total = computed(() => this.subtotal() + this.serviceFee());

  constructor(private homestayService: HomestayService) {}

  onConfirmBooking() {
    console.log('Tiến hành đặt phòng cho:', this.homestay()?.name);
    // Logic điều hướng đến trang thanh toán hoặc mở modal
  }
}