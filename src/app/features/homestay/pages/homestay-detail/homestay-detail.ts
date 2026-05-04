import { Component } from '@angular/core';
import { HomestayHeader } from './components/homestay-header/homestay-header';
import { HomestayGallery } from './components/homestay-gallery/homestay-gallery';
import { HomestayAmenities } from './components/homestay-amenities/homestay-amenities';
import { HomestayLocation } from './components/homestay-location/homestay-location';
import { HomestayReviews } from './components/homestay-reviews/homestay-reviews';
import { HomestayBookingWidget } from './components/homestay-booking-widget/homestay-booking-widget';
import { HomestayService } from '../../../../core/services/homestay/homestay.service';
@Component({
  selector: 'app-homestay-detail',
  imports: [HomestayHeader, HomestayGallery, HomestayAmenities,HomestayLocation, HomestayReviews, HomestayBookingWidget],
  templateUrl: './homestay-detail.html',
  styleUrl: './homestay-detail.css',
})
export class HomestayDetail {
  constructor(public homestayService: HomestayService) { }
  
  ngOnInit() {
    const homestayId = 2; 
    this.homestayService.getHomestayById(homestayId).subscribe(response => {
      console.log('Chi tiết homestay:', response.data);
    });
  }

}
