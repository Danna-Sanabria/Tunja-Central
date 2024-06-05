import { Component, Input, OnInit } from '@angular/core';
import { ICultosItems } from './iCardCultos-metadata';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() height = 500;
  @Input() isFullScreen = false ;
  @Input() itemsCultos: ICultosItems[] = [];

  /**
   * Final Properties
   */

  public finalHeight : string | number = 0;
  public currentPosition = 0;

  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.itemsCultos.map( (i, index)=> {
      i.id = index;
      i.marginLeft = 0;
    })
  }

  redirectToLink(link: string) {
    window.open(link, '_blank');
}

}
