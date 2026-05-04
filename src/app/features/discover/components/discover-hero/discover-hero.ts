import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-discover-hero',
  imports: [],
  templateUrl: './discover-hero.html',
  styleUrl: './discover-hero.css',
})
export class DiscoverHero {
  @ViewChild('videoRef') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const vid = this.video.nativeElement;
    vid.muted = true;
    vid.play().catch(err => {
      console.log('Autoplay bị chặn:', err);
    });
  }
}
