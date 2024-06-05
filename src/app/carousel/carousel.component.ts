import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './icarousel-item-metadate';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  autoPlayInterval: any;


  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.startAutoPlay();
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })
  }

  public foundItem() {
    return this.items.find(i => i.id === 0);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    const validatedItem = this.foundItem();
    if (validatedItem) {
      validatedItem.marginLeft = -100 * position;
    }
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    const validatedItem = this.foundItem()
    if (validatedItem) {
      validatedItem.marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    }
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const validatedItem = this.foundItem();
    if (validatedItem) {
      validatedItem.marginLeft = finalPercentage;
      this.currentPosition = backPosition;
    }
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.setNext();
    }, 5000); 
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

}
