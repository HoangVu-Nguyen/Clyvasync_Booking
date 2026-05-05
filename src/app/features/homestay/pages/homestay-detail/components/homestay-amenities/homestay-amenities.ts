import { Component, computed, OnInit } from '@angular/core';
import { HomestayService } from '../../../../../../core/services/homestay/homestay.service';

@Component({
  selector: 'app-homestay-amenities',
  imports: [],
  templateUrl: './homestay-amenities.html',
  styleUrl: './homestay-amenities.css',
})
export class HomestayAmenities implements OnInit {
  constructor(private homestayService: HomestayService) { }

  amenities = computed(() => this.homestayService.currentHomestay()?.amenities || []); ngOnInit(): void {







}
}
