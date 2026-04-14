import { Component } from '@angular/core';
import { DiscoverCurated } from './components/discover-curated/discover-curated';
import { DiscoverExperiences } from './components/discover-experiences/discover-experiences';
import { DiscoverFeatureInfo } from './components/discover-feature-info/discover-feature-info';
import { DiscoverHero } from './components/discover-hero/discover-hero';
@Component({
  selector: 'app-discover',
  imports: [DiscoverCurated,DiscoverExperiences,DiscoverFeatureInfo,DiscoverHero],
  templateUrl: './discover.html',
  styleUrl: './discover.css',
})
export class Discover {}
