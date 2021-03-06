import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PullComponent } from './pull/pull.component';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { PromotionComponent } from './promotion/promotion.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


//Services
import { ArticleService } from './services/article.service';
import { RaterpasService } from './services/raterpas.service';
import { MeilleuresVentesService } from './services/meilleures-ventes.service';

// Directives
import { ChangeImgDirective } from './directives/change-img.directive';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SingleItemComponent } from './single-item/single-item.component';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FraisRetourComponent } from './frais-retour/frais-retour.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PullComponent,
    ChaussuresComponent,
    AccessoiresComponent,
    PromotionComponent,
    NouveautesComponent,
    HomeComponent,
    ChangeImgDirective,
    AnimationComponent,
    WishlistComponent,
    SingleItemComponent,
    ContactComponent,
    FraisRetourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxUsefulSwiperModule,
    HttpClientModule,


  ],
  providers: [ArticleService, RaterpasService, MeilleuresVentesService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
