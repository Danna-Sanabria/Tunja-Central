import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit{

  ngAfterViewInit() {
    $('#menu-toggle').click(() => {
      $('nav').toggleClass('active');
    });
  }
  
}
