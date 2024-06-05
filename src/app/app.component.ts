import { Component } from '@angular/core';
import { ICarouselItem } from './carousel/icarousel-item-metadate';
import { CAROUSEL_DATA_ITEMS } from './constants/carousel.const';
import { ICultosItems } from './card/iCardCultos-metadata';
import { CULTOS_DATA_ITEMS } from './constants/cultos.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pageTunja';

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public cultosData: ICultosItems[] = CULTOS_DATA_ITEMS;
}
