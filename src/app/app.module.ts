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

//Services
import { ArticleService } from './services/article.service';
import { RaterpasService } from './services/raterpas.service';
import { HomeComponent } from './home/home.component';
import { ChangeImgDirective } from './directives/change-img.directive';

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
    ChangeImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [ArticleService, RaterpasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
