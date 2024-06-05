import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { RedesComponent } from './redes/redes.component';
import { BethelSectionComponent } from './bethel-section/bethel-section.component';
import { InformationComponent } from './information/information.component';
import { AditionalInfoComponent } from './aditional-info/aditional-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    CardComponent,
    RedesComponent,
    BethelSectionComponent,
    InformationComponent,
    AditionalInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
