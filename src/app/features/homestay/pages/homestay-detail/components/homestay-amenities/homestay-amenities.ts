import { Component, computed, OnInit } from '@angular/core';
import { HomestayService } from '../../../../../../core/services/homestay/homestay.service';

@Component({
  selector: 'app-homestay-amenities',
  imports: [],
  templateUrl: './homestay-amenities.html',
  styleUrl: './homestay-amenities.css',
})
export class HomestayAmenities implements OnInit {
  constructor(private homestayService: HomestayService) {}
  ngOnInit(): void {
    console.log(this.amenities())
  }
 

    // Lấy dữ liệu trực tiếp từ Service (Reactive)
    // Nếu dùng Signal trong HTML: {{ homestayService.currentHomestay()?.name }}
    get homestay() {
        return this.homestayService.currentHomestay();
    }
    amenities = computed(() => this.homestayService.currentHomestay() || []);


    
}
