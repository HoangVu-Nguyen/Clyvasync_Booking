import { Component, OnInit } from '@angular/core';
import { HomestayResponse } from '../../../core/models/response/homestay.response';
import { CommonModule } from '@angular/common';
import { HomestayItem } from '../homestay-item/homestay-item';
import { HomestayService } from '../../../core/services/homestay/homestay.service';
import { ChangeDetectorRef } from '@angular/core'; // 1. Import cái này
@Component({
  selector: 'app-homestay-list',
  imports: [CommonModule, HomestayItem],
  templateUrl: './homestay-list.html',
  styleUrl: './homestay-list.css',
})
export class HomestayList  implements OnInit{
  homestaysRespone!: HomestayResponse[];
constructor(
  private homestayService: HomestayService,
  private cdr: ChangeDetectorRef // 2. Inject vào constructor
) {}
ngOnInit(): void {
  this.homestayService.getAllHomestays().subscribe({
    next: (res) => {
      this.homestaysRespone = res.data.content;
      this.cdr.detectChanges(); // 3. Gọi hàm này ngay sau khi gán data
    }
  });
}
  

}
